export const axios = require("axios");

export const LOGIN_ENDPOINT = "https://dentifyxbe.azurewebsites.net/login";

export const USER_ENDPOINT = "https://dentifyxbe.azurewebsites.net/user";

export const USERS_ENDPOINT = "https://dentifyxbe.azurewebsites.net/users";

export const ML_ENDPOINT = "https://dentifyxbe.azurewebsites.net/ml/predict";

export const STATUS = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

export default axios;
