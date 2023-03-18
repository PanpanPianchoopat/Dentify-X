import styled from "styled-components";
import { Button } from "antd";
import colors from "../../../../public/constants/colors";

export const StyleButton = styled(Button).attrs((props) => {
  const primary_color = props.primary_color
    ? props.primary_color
    : colors.PRIMARY_BLUE;
  const dynamic_background =
    props.type === "primary"
      ? primary_color === colors.NAVY
        ? colors.LIGHT_NAVY
        : colors.LIGHT_PRIMARY_BLUE
      : "none";
  const dynamic_border =
    props.type === "primary"
      ? "none"
      : primary_color == colors.NAVY
      ? `1px solid ${colors.NAVY}`
      : `1px solid ${colors.PRIMARY_BLUE}`;
  return { primary_color, dynamic_background, dynamic_border };
})`
  color: ${(props) => props.primary_color};
  font-weight: bold;
  height: 40px;
  width: 150px;
  border: ${(props) => props.dynamic_border};
  background: ${(props) => props.dynamic_background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;


