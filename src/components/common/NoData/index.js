import React from "react";

import { IconWrapper, EmptyIcon } from "./styled";

export default function NoData(props) {
  return (
    <IconWrapper>
      <EmptyIcon />
      <h4 style={{ fontWeight: "bold" }}>No Data</h4>
      {props.description && (
        <p style={{ fontSize: "12px" }}>{props.description}</p>
      )}
    </IconWrapper>
  );
};

