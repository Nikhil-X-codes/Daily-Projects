import { useState, useEffect } from "react";

const useCurrencyConverter = (currency) => {
    
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const apiKey = 'cc2fee393e72eaad68b45265';

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([currency, ...Object.keys(data.conversion_rates)]);
      });
  }, [currency]);

  return currencyOptions;
};

export default useCurrencyConverter;