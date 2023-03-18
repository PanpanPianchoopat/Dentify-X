import styled from "styled-components";
import { Progress } from "antd";
import colors from "../../../../public/constants/colors";
import Image from "next/image";

export const Box = styled.div.attrs((props) => {
  const dynamicColor =
    props.customColor === "left" ? colors.PRIMARY_BLUE : colors.PURPLE;
  return { dynamicColor };
})`
  width: 100%;
  height: 250px;
  min-width: 200px;
  border: 1px solid ${(props) => props.dynamicColor};
  font-size: 14px;
  border-radius: 16px;
  overflow: hidden;
  margin: 10px 0;
`;

export const BoxHead = styled.h3.attrs((props) => {
  const dynamicColor =
    props.customColor === "left"
      ? colors.LIGHT_PRIMARY_BLUE
      : "rgba(148, 87, 228, 0.25);";
  return { dynamicColor };
})`
  background: ${(props) => props.dynamicColor};
  font-weight: bold;
  width: 100%;
  padding: 10px 20px;
  margin: 0em;
  color: black;
`;

export const HorizontalLine = styled.hr.attrs((props) => {
  const dynamicColor =
    props.customColor === "left" ? colors.PRIMARY_BLUE : colors.PURPLE;
  return { dynamicColor };
})`
  color: black;
  width: 100%;
  height: 1px;
  border: none;
  position: relative;
  background-color: ${(props) => props.dynamicColor};
  margin-block-start: 0;
`;

export const DetailWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  overflow-y: auto;
  padding: 15px 5px;
`;
export const Detail = styled.div`
  width: 100%;
  padding: 0px 10px;
`;

export const LevelContainer = styled.div`
  margin-bottom: 10px;
`;

export const Level = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledProgress = styled(Progress).attrs({
  showInfo: false,
  trailColor: colors.GRAY,
})`
  width: 100%;
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.GRAY};
  font-weight: bold;
`;

export const StyledImage = styled(Image).attrs({
  alt: "",
  width: 50,
  height: 50,
})`
  filter: invert(100%) sepia(5%) saturate(11%) hue-rotate(103deg)
    brightness(103%) contrast(70%);
`;

export default Box;
