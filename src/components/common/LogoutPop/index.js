import React from "react";
import Router from "next/router";

import { deleteCookie } from "cookies-next";

import { Modal } from "antd";
import colors from "../../../../public/constants/colors";
import { CancelButton, LogoutButton } from "./styled";
import { ButtonWrapper } from "../StyledButton/styled";

export default function LogoutPop(props) {
  const handleLogout = () => {
    deleteCookie("user");
    Router.push("/");
  };

  return (
    <Modal
      open={props.isOpen}
      title={<p style={{ color: colors.NAVY }}>Log Out</p>}
      width="350px"
      onCancel={() => props.setIsOpen(false)}
      centered
      footer={
        <ButtonWrapper>
          <CancelButton onClick={() => props.setIsOpen(false)}>
            Cancel
          </CancelButton>
          <LogoutButton onClick={() => handleLogout()}>Log out</LogoutButton>
        </ButtonWrapper>
      }
      style={{ color: colors.NAVY }}
    >
      You're leaving the website
      <br />
      Are you sure?
    </Modal>
  );
}
