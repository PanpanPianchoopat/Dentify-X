import styled from "styled-components";
import colors from "../../../../public/constants/colors";
import { AiOutlineLeft } from "react-icons/ai";

export const Background = styled.div.attrs((props) => {
  const theme =
    props.customTheme === "twoTone"
      ? `linear-gradient(
        to bottom,
        ${colors.DARK_BG} 0%,
        ${colors.DARK_BG} 250px,
        ${colors.LIGHT_BG} 250px,
        ${colors.LIGHT_BG} 100%
      )`
      : colors.LIGHT_BG;
  const blur = props.blur ? "blur(10px)" : "none";
  return { theme, blur };
})`
  background: ${(props) => props.theme};
  width: 100%;
  height: 100vh;
  padding: 20px 12vw;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: ${(props) => props.blur};
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: calc(100% - 60px);
  background: none;
  padding: 2em 0;
  justify-content: space-between;
`;

export const HeadContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button.attrs((props) => {
  const dynamic_background =
    props.customTheme == "twoTone" ? colors.DARK_BG : colors.LIGHT_BG;
  const dynamicTextColor =
    props.customTheme == "twoTone" ? "white" : colors.NAVY;
  return { dynamic_background, dynamicTextColor };
})`
  color: ${(props) => props.dynamicTextColor};
  width: 75px;
  border: none;
  background: ${(props) => props.dynamic_background};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  font-weight: 500;
  &:hover {
    color: ${colors.PRIMARY_BLUE};
  }
`;

export const StyledHead = styled.div.attrs((props) => {
  const textColor = props.customTheme === "twoTone" ? "white" : colors.NAVY;
  return { textColor };
})`
  border-left: 0.4em solid ${colors.PRIMARY_BLUE};
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 2em;
  color: ${(props) => props.textColor};
  padding-left: 0.5em;
  font-weight: bold;
`;

export const BackIcon = styled(AiOutlineLeft)`
  font-size: 20px;
`;

export const UserAccount = styled.div.attrs((props) => {
  const dynamicTextColor =
    props.customTheme == "twoTone" ? "white" : colors.NAVY;
  return { dynamicTextColor };
})`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  color: ${(props) => props.dynamicTextColor};
  font-weight: 500;
  cursor: pointer;
`;

export const UserIcon = styled.div`
  border-radius: 50%;
  background: ${colors.PURPLE};
  display: flex;
  width: 50px;
  height: 50px;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 20px;
`;
