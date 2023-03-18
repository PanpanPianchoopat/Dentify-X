import { axios, USERS_ENDPOINT } from "./commonAPI";
import { getCookie } from "cookies-next";

class UsersAPI {
  createUser = (data) => {
    const token = getCookie("user");
    const headConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    return axios.post(USERS_ENDPOINT, data, headConfig);
  };
}

export default new UsersAPI();
