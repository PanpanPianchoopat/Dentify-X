import React from "react";
import { AvatarWrapper, Circle, Name, DefaultAvatar } from "./styled";

export default function AvatarIcon({ ...props }) {
  const isNotEmpty = props.fname || props.lname;

  return (
    <AvatarWrapper>
      <h4 style={{ fontWeight: "bold" }}>Display</h4>
      <Circle customBg={isNotEmpty}>
        <Name>
          {isNotEmpty ? (
            <>
              {props.fname && Array.from(props.fname)[0].toUpperCase()}
              {props.lname && Array.from(props.lname)[0].toUpperCase()}
            </>
          ) : (
            <>
              <DefaultAvatar />
            </>
          )}
        </Name>
      </Circle>
    </AvatarWrapper>
  );
};

