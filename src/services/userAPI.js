import { axios, USER_ENDPOINT } from "./commonAPI";
import { getCookie } from "cookies-next";

class UserAPI {
  getUser = () => {
    const token = getCookie("user");
    const response = axios({
      method: "get",
      url: USER_ENDPOINT,
      headers: {
        Authorization: token,
      },
    });
    return response;
  };
}

export default new UserAPI();
