import React from "react";
import { StyleButton } from "./styled";

export default function StyledButton({ children, ...props }) {
  return <StyleButton {...props}>{children}</StyleButton>;
};
