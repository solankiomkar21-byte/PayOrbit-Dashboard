import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('USD');
  const rates = { INR: 83.5, USD: 1, EUR: 0.92, GBP: 0.79, AED: 3.67, JPY: 151.2 };

  const format = (amount, code = currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: code,
    }).format(amount * (code === 'INR' ? rates.INR : 1));
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format, rates }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
