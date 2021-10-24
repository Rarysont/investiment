import api from "./api";

export const getStocks = (params) => api.get("Stock/Paginator", { params }).then((res) => res.data);
