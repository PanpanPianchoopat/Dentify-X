import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { STATUS } from "@/services/commonAPI";
import { useGetUser } from "@/hooks/useAuth";
import { useRegister } from "@/hooks/useAdmin";

import PageContainer from "@/components/common/PageContainer";
import StyledButton from "@/components/common/StyledButton";
import AvatarIcon from "@/components/Register/Avatar";
import { Form, Radio, Row, Col, message, Select } from "antd";

import {
  ADMIN_ROLE,
  USER_ROLE,
  JOB_POSITION,
  PROFICIENCY_LEVELS,
} from "../../../public/constants/users";

import {
  ResgisterFormContainer,
  FormItem,
  RadioWrapper,
  RadioContent,
  UserIcon,
  AdminIcon,
  Level,
  StyledInput,
  ButtonWrapper,
} from "./styled";


const RegisterPage = () => {
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false);
  const [form] = Form.useForm();

  const [userType, setUserType] = useState(USER_ROLE);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);

  useEffect(() => {
    let ignore = false;
    const userRole = async () => {
      const response = await useGetUser();
      if (!ignore && response.data) {
        response.data.query_results[0].RoleID == ADMIN_ROLE
          ? setIsAdmin(true)
          : message
              .error("Access denied, redirecting...")
              .then(() => router.back());
      } else {
        !ignore &&
          message
            .error("Access denied, please login")
            .then(() => router.push("/"));
      }
    };
    userRole();
    return () => {
      ignore = true;
    };
  }, []);

  const handleCancel = () => {
    form.resetFields();
    setUserType(USER_ROLE);
    setFname(null);
    setLname(null);
  };

  const onSubmit = async (input) => {
    const res = await useRegister(input);
    if (res.response && res.response.status != STATUS.CREATED) {
      const errorMessage = res.response.data.error;
      message.error(errorMessage);
    } else if (res.status == STATUS.CREATED) {
      message.success("Successfully created!");
      handleCancel();
    }
  };

  const handleFname = () => {
    const fname = form.getFieldValue("fname");
    setFname(fname);
  };

  const handleLname = () => {
    const lname = form.getFieldValue("lname");
    setLname(lname);
  };

  const validatePassword = (rule, value, callback) => {
    if (value) {
      const inputPassword = form.getFieldValue("password");
      const passwordFormat = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])/);
      const isAlphanumeric = passwordFormat.test(inputPassword);
      if (!isAlphanumeric) {
        callback("Password must contain at least 1 alphabet and 1 number");
      }
      if (inputPassword.length < 8) {
        callback("Password must be at least 8 characters");
      } else {
        callback();
      }
    } else {
      callback();
    }
  };

  function requiredRule(field) {
    const rule = [{ required: true, message: `Require ${field}` }];
    if (field === "e-mail") {
      rule.push({ type: "email", message: "Please enter a valid email" });
    } else if (field === "password") {
      rule.push({ validator: validatePassword });
    }
    return rule;
  }

  return (
    <PageContainer
      theme="twoTone"
      heading="User Registration"
      back
      blur={!isAdmin}
    >
      <ResgisterFormContainer>
        <Form
          layout="vertical"
          name="register"
          form={form}
          onFinish={onSubmit}
          requiredMark={false}
          style={{ width: "100%", overflowY: "auto" }}
          action="/api/register"
          method="post"
        >
          <Form.Item name="userRole">
            <RadioWrapper>
              <h4 style={{ margin: "auto 20px auto 0", fontWeight: "bold" }}>
                Account Type
              </h4>
              <Radio.Group
                value={userType}
                buttonStyle="solid"
                onChange={(event) => setUserType(event.target.value)}
              >
                <Radio.Button value={USER_ROLE}>
                  <RadioContent>
                    <UserIcon active={userType} />
                    User
                  </RadioContent>
                </Radio.Button>
                <Radio.Button value={ADMIN_ROLE}>
                  <RadioContent>
                    <AdminIcon active={userType} />
                    Administrator
                  </RadioContent>
                </Radio.Button>
              </Radio.Group>
            </RadioWrapper>
          </Form.Item>
          <Row>
            <Col span={18}>
              <Row justify="space-between">
                <Col span={11}>
                  <FormItem
                    name="fname"
                    label="Firstname"
                    rules={requiredRule("firstname")}
                    onChange={handleFname}
                  >
                    <StyledInput placeholder="Firstname" />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    name="lname"
                    label="Lastname"
                    rules={requiredRule("lastname")}
                    onChange={handleLname}
                  >
                    <StyledInput placeholder="Lastname" />
                  </FormItem>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col span={11}>
                  <FormItem
                    name="email"
                    label="E-mail"
                    rules={requiredRule("e-mail")}
                  >
                    <StyledInput placeholder="Email" />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    name="password"
                    label="Password"
                    rules={requiredRule("password")}
                  >
                    <StyledInput.Password placeholder="Password" />
                  </FormItem>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col span={10}>
                  <FormItem name="jobPosition" label="Job Position (optional)">
                    <Select options={JOB_POSITION} placeholder="Select" />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    name="profLevel"
                    label="Proficiency Level"
                    rules={requiredRule("proficiency")}
                  >
                    <Level
                      style={{ width: "150%" }}
                      options={PROFICIENCY_LEVELS}
                      optionType="button"
                      buttonStyle="solid"
                    />
                  </FormItem>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row justify="end">
                <AvatarIcon fname={fname} lname={lname} />
              </Row>
            </Col>
          </Row>
          <Form.Item>
            <ButtonWrapper>
              <StyledButton
                type="primary"
                htmlType="submit"
                style={{ marginRight: "2vw" }}
              >
                Add account
              </StyledButton>
              <StyledButton onClick={() => handleCancel()}>Cancel</StyledButton>
            </ButtonWrapper>
          </Form.Item>
        </Form>
      </ResgisterFormContainer>
    </PageContainer>
  );
};

export default RegisterPage;
