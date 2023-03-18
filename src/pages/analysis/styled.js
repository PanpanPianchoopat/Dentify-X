import Image from "next/image";
import styled from "styled-components";
import colors from "../../../public/constants/colors";

export const ResultContainer = styled.div`
  display: flex;
  width: 33%;
  height: 100%;
  background: white;
  border-radius: 16px;
  color: ${colors.NAVY};
  padding: 20px;
  overflow: auto;
`;

export const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoaderWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LoaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`;

export const StyledLoaderImage = styled(Image).attrs({
  alt: "",
  unoptimized: true,
})`
  object-fit: contain;
`;

export default ResultContainer;
