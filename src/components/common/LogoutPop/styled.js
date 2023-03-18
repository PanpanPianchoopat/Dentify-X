import styled from "styled-components";
import colors from "../../../../public/constants/colors";

export const LogoutButton = styled.button`
  width: 48%;
  height: 40px;
  background: rgba(216, 75, 134, 0.25);
  border: 1px solid #d84b86;
  border-radius: 6px;
  color: #d84b86;
  cursor: pointer;
  &:hover {
    background: #d84b86;
    color: white;
    font-weight: bold;
  }
`;

export const CancelButton = styled.button`
  width: 48%;
  height: 40px;
  border: 1px solid ${colors.NAVY};
  border-radius: 6px;
  color: ${colors.NAVY};
  background: none;
  cursor: pointer;
  &:hover {
    color: #d84b86;
    border: 2px solid #d84b86;
    font-weight: bold;
  }
`;
