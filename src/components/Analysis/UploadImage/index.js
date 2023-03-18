import React, { useState, useRef, useCallback } from "react";
import Router from "next/router";
import { toPng } from "html-to-image";

import { LoadingIcon } from "@/pages/styled";
import { EmptyIcon } from "../../../components/common/NoData/styled";

import { Upload, message } from "antd";
import StyledButton from "@/components/common/StyledButton";

import {
  ImageContainer,
  UploadContainer,
  UploadButton,
  StyledImage,
  MenuContainer,
} from "./styled";
import colors from "../../../../public/constants/colors";
import CookieWarning from "@/components/common/CookieWarning";
import { useModel } from "@/hooks/useModel";
import { STATUS } from "@/services/commonAPI";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export default function UploadImage({ ...props }) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [filterImg, setFilterImg] = useState(null);
  const imgRef = useRef(null);

  function handleUploadError(err) {
    message
      .error("Unexpected error, please re-upload image")
      .then(() => handleReupload());
  }

  const handleAnalyze = useCallback(() => {
    props.setResultLoad(true);
    if (imgRef.current === null) {
      props.setResultLoad(false);
      return;
    }
    toPng(imgRef.current, { cacheBust: true })
      .then(async (url) => {
        setFilterImg(url);
        const analysis = await useModel(url);
        if (
          analysis.response &&
          analysis.response.status == STATUS.UNAUTHORIZED
        ) {
          message
            .error("Timeout, please login again")
            .then(() => Router.push("/"));
        } else if (analysis.status == STATUS.OK) {
          setImage(`data:image/jpeg;base64,${analysis.data.b64_image}`);
          props.setResult(analysis);
          props.setResultLoad(false);
        } else {
          handleUploadError();
        }
      })
      .catch((err) => {
        handleUploadError(err);
      });
  }, [imgRef]);

  const beforeUpload = (file) => {
    const isTooLarge = file.size / 1024 / 1024 > 10;
    if (isTooLarge) {
      message
        .error("Image must be smaller than 10MB")
        .then(() => handleReupload());
    }
  };

  const handleChange = (info) => {
    const fileType = info.file.type;
    const isValidFile =
      fileType === "image/jpeg" ||
      fileType === "image/png" ||
      fileType === "image/bmp";
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      if (isValidFile) {
        getBase64(info.file.originFileObj, (url) => {
          setImage(url);
        });
      } else {
        message.error("Invalid file type, review image must be jpeg or png");
      }
      setLoading(false);
    }
  };

  const handleReupload = () => {
    setImage(null);
    setFilterImg(null);
    setLoading(false);
    props.setResultLoad(false);
    props.setResult(null);
  };

  return (
    <ImageContainer>
      {image ? (
        <UploadContainer customHeight={image}>
          <StyledImage
            ref={imgRef}
            src={image}
            alt=""
            width={1000}
            height={400}
          />
        </UploadContainer>
      ) : (
        <UploadContainer customHeight={image}>
          <h2 style={{ fontWeight: "bold" }}>Upload Your Image</h2>
          <p style={{ margin: "5px 0", fontSize: "0.9em" }}>
            Only BMP, PNG, and JPG files are allowed.
          </p>
          <p style={{ margin: "0 0 10px 0", fontSize: "0.9em" }}>
            (10MB maximum)
          </p>
          <Upload
            action="/api/imgUpload"
            beforeUpload={beforeUpload}
            onChange={(info) => handleChange(info)}
            showUploadList={false}
          >
            <UploadButton>
              {loading ? <LoadingIcon /> : <EmptyIcon />}
              <h3>Click or drag file to this area to upload</h3>
              <p style={{ color: colors.NAVY, opacity: "0.4" }}>
                Support for a single or bulk upload. Strictly prohibit <br />
                from uploading company data or other band files
              </p>
            </UploadButton>
          </Upload>
        </UploadContainer>
      )}
      <MenuContainer customDisplay={image}>
        <StyledButton
          type="primary"
          onClick={() => handleAnalyze()}
          disabled={filterImg ? true : false}
          style={{ marginRight: "5vw" }}
        >
          Analyze
        </StyledButton>
        <StyledButton onClick={() => handleReupload()}>Re-upload</StyledButton>
      </MenuContainer>
      <CookieWarning />
    </ImageContainer>
  );
};

