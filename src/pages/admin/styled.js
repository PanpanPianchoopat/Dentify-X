import styled from "styled-components";
import colors from "../../../public/constants/colors";

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const MenuButton = styled.div`
  width: 30%;
  height: 180px;
  background: white;
  border-radius: 16px;
  padding: 40px 20px 25px 20px;
  color: ${colors.DARK_BG};
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Report = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 16px;
  padding: 20px;
  display: flex;
`;

export default Report;