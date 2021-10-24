import api from "./api";

export const basicLogin = (params) =>
  api.post("api/CreateToken", params).then((res) => res);
