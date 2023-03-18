import styled from "styled-components";
import { HiUser } from "react-icons/hi";
import colors from "../../../../public/constants/colors";

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 0;
`;

export const Circle = styled.div.attrs((props) => {
  const dynamic_background = props.customBg ? "#9457E4" : colors.GRAY;
  return { dynamic_background };
})`
  border-radius: 50%;
  background: ${(props) => props.dynamic_background};
  border: 0.8vw solid ${(props) => props.dynamic_background};
  width: 12vw;
  height: 12vw;
  max-width: 200px;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
`;

export const Name = styled.div`
  font-size: 5vw;
`;

export const DefaultAvatar = styled(HiUser)`
  font-size: 12vw;

  color: white;
  margin-top: 3vw;
`;

export default AvatarWrapper;
