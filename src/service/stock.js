import api from "./api";

export const getStocks = (params) =>
  api.get("stock", { params }).then((res) => res.data);
