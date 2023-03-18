import styled from "styled-components";
import Image from "next/image";
import { Button } from "antd";
import colors from "../../../../public/constants/colors";

export const ImageContainer = styled.div`
  display: flex;
  width: 65%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const UploadContainer = styled.div.attrs((props) => {
  const dynamic_height = props.customHeight == null ? "100%" : "88%";
  const dynamic_background =
    props.customHeight == null ? "white" : colors.CUSTOM_BLACK;
  return { dynamic_height, dynamic_background };
})`
  display: flex;
  width: 100%;
  height: ${(props) => props.dynamic_height};
  background: ${(props) => props.dynamic_background};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.NAVY};
  position: relative;
`;

export const UploadButton = styled(Button)`
  height: 30vh;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.LIGHT_PRIMARY_BLUE};
  border: 1px dashed ${colors.PRIMARY_BLUE};
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
`;

export const MenuContainer = styled.div.attrs((props) => {
  const dynamic_display = props.customDisplay == null ? "none" : "flex";
  return { dynamic_display };
})`
  display: ${(props) => props.dynamic_display};
  width: 100%;
  height: 80px;
  background: white;
  border-radius: 16px;
  background: whites;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  width: 110px;
  font-size: 14px;
  flex-direction: column;
  margin: 1.5em 0 0 0;
  color: ${colors.NAVY};
`;

export default ImageContainer;
