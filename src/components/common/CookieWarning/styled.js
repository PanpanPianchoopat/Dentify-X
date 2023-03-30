import styled from "styled-components";
import { RxCookie } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import colors from "../../../../public/constants/colors";
import breakpoints from "../../../../public/constants/breakpoints";

export const WarningWrapper = styled.div.attrs((props) => {
  const dynamic_display = props.isShown ? "unset" : "none";
  return { dynamic_display };
})`
  border: 2px solid ${colors.NAVY};
  border-radius: 9px;
  position: absolute;
  padding: 1em;
  bottom: 2em;
  right: 2em;
  font-size: 12px;
  color: ${colors.NAVY};
  background: white;
  display: ${(props) => props.dynamic_display};
  @media (max-width: ${breakpoints.PHONE_PORTRAIT}) {
    right: auto;
    font-size: 10px;
    padding: 0.5em;
    bottom: 0.1em;
  }
`;

export const WarningHead = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  margin-bottom: 10px;
  color: ${colors.NAVY};
`;

export const CookieIcon = styled(RxCookie)`
  font-size: 40px;
  color: ${colors.NAVY};
  margin-right: 0.5em;
  @media (max-width: ${breakpoints.PHONE_PORTRAIT}) {
    font-size: 30px;
  }
`;

export const CancelButton = styled.button`
  cursor: pointer;
  margin-left: auto;
  display: flex;
  border: none;
  background: none;
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const CancelIcon = styled(AiOutlineClose)`
  color: ${colors.NAVY};
  font-size: 20px;
`;

export const AcceptButton = styled.button`
  height: 30px;
  width: 100%;
  border: 1px solid ${colors.NAVY};
  border-radius: 7px;
  background: ${colors.NAVY};
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
