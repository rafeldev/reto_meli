/* Esta funcion formatea cualquier entero a moneda */
export const formatCurrency = (value, fix = 0) => {
  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  const amount = String(value).replace(regExp, '.');

  return value ? (value < 0 ? `-$${amount.slice(1)}` : `$${amount}`) : 0;
};