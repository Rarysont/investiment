export const maskTEL = (value) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");
};

export const unmaskTEL = (value) => {
  if (!value) return "";

  return value
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(" ", "");
};

export const unmaskDate = (value) => {
  if (!value) return "";
  return value.replace(/\//gu, " ");
};

export const maskDate = (value) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");
};

export const maskCPF = (value) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const unmaskCPF = (value) => {
  if (!value) return "";

  return value.replace(/\./g, "").replace(/-/g, "");
};

export const maskBRL = (value) => {
  if (typeof value !== "number" && !value) return "";
  const formated = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  const newFormated = formated.split(",").join(".");

  return `R$ ${`${newFormated.substr(
    0,
    newFormated.lastIndexOf(".")
  )},${newFormated.substr(newFormated.lastIndexOf(".") + 1)}`}`;
};

export const maskEMAIL = (value) => {
  if (!value) return "";

  return value.replace(/\s/g, "");
};

