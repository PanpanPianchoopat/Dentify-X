import React, { useState, useEffect } from "react";
import Router from "next/router";

import PageContainer from "../../components/common/PageContainer";
import UploadImage from "@/components/Analysis/UploadImage";
import ResultBox from "@/components/Analysis/ResultBox";
import NoData from "@/components/common/NoData";
import { message } from "antd";

import { useGetUser } from "@/hooks/useAuth";

import {
  ResultContainer,
  ResultWrapper,
  LoaderWrapper,
  LoaderContainer,
  StyledLoaderImage,
} from "./styled";
import { ADMIN_ROLE, USER_ROLE } from "../../../public/constants/users";

const AnalysisPage = () => {
  const [result, setResult] = useState(null);
  const [resultLoad, setResultLoad] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    let ignore = false;
    const userRole = async () => {
      const response = await useGetUser();
      if (!ignore && response.data) {
        const userRole = response.data.query_results[0].RoleID;
        setUserType(userRole);
        const hasLogin = userRole == ADMIN_ROLE || userRole == USER_ROLE;
        if (hasLogin) {
          setIsLogin(true);
        }
      } else {
        !ignore &&
          message
            .error("Access denied, please login")
            .then(() => Router.push("/"));
      }
    };
    userRole();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <PageContainer
      heading="Tooth Analysis"
      back={userType === ADMIN_ROLE}
      account
      blur={!isLogin}
    >
      <UploadImage setResult={setResult} setResultLoad={setResultLoad} />
      <ResultContainer>
        {result ? (
          <ResultWrapper>
            <h2 style={{ fontWeight: "bold", marginBottom: "0.5em" }}>
              Analysis Result
            </h2>
            {result.data.prediction.map((prediction, idx) => {
              return <ResultBox key={idx} result={prediction} />;
            })}
          </ResultWrapper>
        ) : resultLoad ? (
          <LoaderWrapper>
            <LoaderContainer>
              <StyledLoaderImage src="/assets/LoadingBar.gif" fill />
            </LoaderContainer>
            <h3>Analyzing your Image</h3>
            <p>This might take a while...</p>
          </LoaderWrapper>
        ) : (
          <NoData description="Please upload image and analyze" />
        )}
      </ResultContainer>
    </PageContainer>
  );
};

export default AnalysisPage;
