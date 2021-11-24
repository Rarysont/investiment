import api from "./api";

export const getDataGraphic = (params, token) => {
  return api.get(`Stock/StockProgression?stockId=${params.stockId}&type=${params.typeProgression}`, {
     headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => res.data)
};
