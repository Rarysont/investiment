import api from "./api";

export const register = (params) => {
  return api.post("api/Register", params).then((res) => res.data);
}

