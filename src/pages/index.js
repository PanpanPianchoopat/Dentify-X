import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { STATUS } from "@/services/commonAPI";
import { useLogin } from "@/hooks/useLogin";

import PageContainer from "@/components/common/PageContainer";
import StyledButton from "@/components/common/StyledButton";

import { Form, Input, message, Modal } from "antd";
import {
  FormContainer,
  LoadingIcon,
  LoginCard,
  LogoContainer,
  BoldText,
} from "./styled";
import colors from "../../public/constants/colors";

export default function Home() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const handleLogin = async (data) => {
    setLoading(true);
    const status = await useLogin(data);
    if (status != STATUS.OK) {
      setLoading(false);
      if (status == STATUS.NOT_FOUND) {
        message.error("Invalid email / password");
      } else {
        message.error("Please try again");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Dentify-X</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/Favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/Favicon.png"
        />
      </Head>
      <PageContainer>
        <LoginCard>
          <FormContainer>
            <LogoContainer>
              <Image
                src="/assets/DentifyX-logo.svg"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </LogoContainer>
            <Form
              form={form}
              layout="vertical"
              name="login"
              onFinish={handleLogin}
            >
              <Form.Item name="email" label="Email">
                <Input placeholder="Email" size="large" />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <Input.Password placeholder="Password" size="large" />
              </Form.Item>
              <Form.Item>
                {loading ? (
                  <StyledButton style={{ width: "100%", marginTop: "10px" }}>
                    <LoadingIcon />
                  </StyledButton>
                ) : (
                  <StyledButton
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", marginTop: "10px" }}
                  >
                    Log In
                  </StyledButton>
                )}
                <BoldText
                  onClick={() => setOpenPopup(true)}
                  style={{
                    marginTop: "10px",
                    textAlign: "end",
                    cursor: "pointer",
                  }}
                >
                  Forget password?
                </BoldText>
              </Form.Item>
            </Form>
          </FormContainer>
        </LoginCard>
        <Modal
          title={<p style={{ color: colors.NAVY }}>FORGET PASSWORD?</p>}
          open={openPopup}
          footer={null}
          width="300px"
          centered
          onCancel={() => setOpenPopup(false)}
          style={{ color: colors.NAVY }}
        >
          <p>
            <b>Contact Admin</b>
          </p>
          <p>Phone: 081-234-5678</p>
          <p>Email: admin@dentify.com</p>
        </Modal>
      </PageContainer>
    </>
  );
}
