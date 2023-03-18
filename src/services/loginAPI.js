import { axios, LOGIN_ENDPOINT } from "./commonAPI";

class LoginAPI {
  postLogin = (loginData) => {
    const headConfig = {
      header: {
        ContentType: "application/json",
      },
    };

    return axios.post(LOGIN_ENDPOINT, loginData, headConfig);
  };
}

export default new LoginAPI();
