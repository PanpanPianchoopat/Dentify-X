import styled from "styled-components";
import { IoFileTrayOutline } from "react-icons/io5";
import colors from "../../../../public/constants/colors";

export const IconWrapper = styled.div`
  display: flex;
  color: ${colors.PRIMARY_BLUE};
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin: auto;
`;

export const EmptyIcon = styled(IoFileTrayOutline)`
  font-size: 50px;
  margin: 20px;
  color: ${colors.PRIMARY_BLUE};
`;

export default EmptyIcon;
