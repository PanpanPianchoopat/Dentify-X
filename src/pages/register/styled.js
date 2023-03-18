import styled from "styled-components";

import { Form, Input, Radio } from "antd";
import { BsPerson, BsPersonGear } from "react-icons/bs";

import colors from "../../../public/constants/colors";
import { ADMIN_ROLE, USER_ROLE } from "../../../public/constants/users";

export const ResgisterFormContainer = styled.div`
  width: 100%;
  height: fit-content;
  background: white;
  border-radius: 16px;
  padding: 3em 85px;
  display: flex;
  justify-content: space-between;
`;

export const FormItem = styled(Form.Item)`
  font-weight: bold;
`;

export const RadioWrapper = styled.div`
  display: flex;
`;

export const RadioContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const UserIcon = styled(BsPerson).attrs((props) => {
  const dynamic_background =
    props.active === USER_ROLE ? colors.PRIMARY_BLUE : "white";
  return { dynamic_background };
})`
  font-size: 20px;
  border-radius: 4px;
  padding: 2px;
  margin-right: 5px;
  background: ${(props) => props.dynamic_background};
`;

export const AdminIcon = styled(BsPersonGear).attrs((props) => {
  const dynamic_background =
    props.active === ADMIN_ROLE ? colors.PRIMARY_BLUE : "white";
  return { dynamic_background };
})`
  font-size: 20px;
  border-radius: 4px;
  padding: 2px;
  margin-right: 5px;
  background: ${(props) => props.dynamic_background};
`;

export const StyledInput = styled(Input)`
  max-width: 300px;
`;

export const Level = styled(Radio.Group)`
  font-weight: normal;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default ResgisterFormContainer;
