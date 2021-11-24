import api from "./api";

export const getStocks = ({ pPage, pCount, pCodeFilter, token }) => {
  const params = {
    pPage,
    pCount,
    pCodeFilter,
    token,
  }

  return api.get("Stock/Paginator", {
    params, headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => res.data)
};

export const favoriteStocks = (params, { token }) => {
  return api.post("Stock/PostFavorite", params, {
     headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => res.data)
};

export const listFavoriteStocks = ({ token }) => {
  return api.get("Stock/GetFavorites", {
     headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => res.data)
}
