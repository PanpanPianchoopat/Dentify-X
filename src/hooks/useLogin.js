import Router from "next/router";

import { setCookie } from "cookies-next";
import LoginAPI from "@/services/loginAPI";

import { STATUS } from "@/services/commonAPI";
import { ADMIN_ROLE, USER_ROLE } from "../../public/constants/users";

export const useLogin = (data) => {
  const loginData = {
    Email: data.email,
    Password: data.password,
  };

  const response = LoginAPI.postLogin(loginData)
    .then((res) => {
      if (res.status == STATUS.OK) {
        setCookie("user", res.data.token);
        if (res.data.role_id === ADMIN_ROLE) {
          Router.push("/admin", "/");
        } else if (res.data.role_id === USER_ROLE) {
          Router.push("/analysis", "/");
        }
      }
      return res.status;
    })
    .catch((error) => {
      return error.response.status;
    });

  return response;
};
