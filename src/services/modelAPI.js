import { axios, ML_ENDPOINT } from "./commonAPI";

import { getCookie } from "cookies-next";

class ModelAPI {
  getAnalysis = (data) => {
    const token = getCookie("user");
    const headConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    return axios.post(ML_ENDPOINT, data, headConfig);
  };
}

export default new ModelAPI();
