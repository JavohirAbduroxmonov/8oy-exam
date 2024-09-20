export const addCommaToString = (num, isMillion) => {
  if (isMillion) {
    const millions = Math.floor(num / 1000000);
    return `${millions?.toLocaleString()}M`;
  }

  return num < 1
    ? num.toFixed(3)
    : num?.toLocaleString();
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataByCurrency = (data, currency) => {
  const currencyMap = {
    EUR: 'eur',
    JPY: 'jpy',
    GBP: 'gbp',
    RUB: 'rub',
    AED: 'aed',
    USD: 'usd',
  };
  
  return data?.[currencyMap[currency] || 'usd'];
};
