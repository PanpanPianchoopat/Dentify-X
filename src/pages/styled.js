import styled from "styled-components";
import colors from "../../public/constants/colors";
import { BiLoaderAlt } from "react-icons/bi";
import Image from "next/image";
import breakpoints from "../../public/constants/breakpoints";

export const LoginCard = styled.div`
  display: flex;
  width: 55vw;
  min-height: 300px;
  max-width: 700px;
  overflow-y: auto;
  background: linear-gradient(90deg, ${colors.DARK_BG} 30%, white 30%);
  margin: auto;
  padding: 1em 3em;
  border-radius: 16px;
  @media (max-width: ${breakpoints.PHONE_PORTRAIT}) {
    width: 80vw;
    padding: 0 1.5em;
    background: white;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 34%;
  height: fit-content;
  position: relative;
  @media (max-width: ${breakpoints.PHONE_PORTRAIT}) {
    margin: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  margin: 40px 0;
  @media (max-width: ${breakpoints.PHONE_PORTRAIT}) {
    margin: 30px 0;
  }
`;

export const BoldText = styled.p`
  color: ${colors.PRIMARY_BLUE};
  font-weight: bold;
`;

export const LoadingIcon = styled(BiLoaderAlt)`
  color: ${colors.PRIMARY_BLUE};
  font-size: 2em;
  margin-bottom: 5px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PageLoadWrapper = styled.div`
  margin: auto;
  position: relative;
  width: 280px;
  height: 40px;
`;

export const PageLoader = styled(Image)`
  animation: gradient 3s linear infinite;
  @keyframes gradient {
    0% {
      filter: brightness(0) saturate(100%) invert(78%) sepia(17%) saturate(898%)
        hue-rotate(135deg) brightness(92%) contrast(85%);
    }
    50% {
      filter: brightness(0) saturate(100%) invert(15%) sepia(22%)
        saturate(2556%) hue-rotate(176deg) brightness(97%) contrast(91%);
    }
    100% {
      filter: brightness(0) saturate(100%) invert(78%) sepia(17%) saturate(898%)
        hue-rotate(135deg) brightness(92%) contrast(85%);
    }
  }
`;



export default LoadingIcon;