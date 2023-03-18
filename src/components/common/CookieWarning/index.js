import React, { useEffect, useState } from "react";

import { getCookie, setCookie } from "cookies-next";

import { ButtonWrapper } from "../StyledButton/styled";
import {
  WarningWrapper,
  WarningHead,
  CookieIcon,
  CancelButton,
  CancelIcon,
  AcceptButton,
} from "./styled";

export default function CookieWarning() {
  const [isShown, setIsShown] = useState(false);

  const setAcceptCookie = (val) => {
    setCookie("accept", val);
    setIsShown(false);
  };

  useEffect(() => {
    if (!getCookie("accept")) {
      setIsShown(true);
    }
  }, []);

  return (
    <WarningWrapper isShown={isShown}>
      <WarningHead>
        <CookieIcon />
        We use cookies
        <CancelButton onClick={() => setAcceptCookie(false)}>
          <CancelIcon />
        </CancelButton>
      </WarningHead>
      This website uses cookies to ensure you get the best <br />
      experience on our website.
      <ButtonWrapper style={{ marginTop: "15px", justifyContent: "center" }}>
        <AcceptButton onClick={() => setAcceptCookie(true)}>Allow</AcceptButton>
      </ButtonWrapper>
    </WarningWrapper>
  );
};

