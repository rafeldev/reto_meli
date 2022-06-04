export const formatCurrency = (value, fix = 0) => {
  // return currencyFormatter(value, fix);
  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  const amount = String(value).replace(regExp, '.');

  return value ? (value < 0 ? `-$${amount.slice(1)}` : `$${amount}`) : 0;
};