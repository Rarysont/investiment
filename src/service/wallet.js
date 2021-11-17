import api from "./api";

export const addOrRemoveWallet = (data) => {
  const params = {
    idTicket: data.idTicket,
    amount: Number(data.amount),
    purchase: data.purchase,
    operationDate: data.operationDate,
    price: Number(data.price),
  }

  return api.post("Stock/PostOperation", params, { headers: {
      'Authorization': `Bearer ${data.userToken}`
    }
  }).then((res) => res.data)
};
