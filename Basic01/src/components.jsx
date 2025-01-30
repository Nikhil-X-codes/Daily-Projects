import React from 'react';

const Inputing = ({ value, onChange,disabled }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="flex-1 bg-transparent border border-gray-400 text-black rounded-md p-2 placeholder-gray-600 focus:outline-none focus:border-blue-500  no-scrollbar"
      placeholder="0"
    />
  );
};

const Selecting = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-transparent w-full text-black"
    >
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
    </select>
  );
};

function Components({ selectedCurrency, onCurrencyChange, amount, onAmountChange }) {
  return (
    <div className="flex gap-2">
      <Inputing value={amount} onChange={onAmountChange} />
      <Selecting value={selectedCurrency} onChange={onCurrencyChange} />
    </div>
  );
}

export default Components;