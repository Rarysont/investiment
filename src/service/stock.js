import api from "./api";

export const getStocks = (params) =>
  api.get("Stock?pCode=VVAR3", { params }).then((res) => res.data);
