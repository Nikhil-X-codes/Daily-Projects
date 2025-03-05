import React, { useState } from 'react';
import useCurrencyConverter from './customhook';
import { ArrowLeftRight } from 'lucide-react';

function App() {

  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [sourceCurrencyType, setSourceCurrencyType] = useState('USD');
  const [targetCurrencyType, setTargetCurrencyType] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyOptions = useCurrencyConverter(sourceCurrencyType);

  const handleSwap = () => {
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
    setSourceCurrencyType(targetCurrencyType);
    setTargetCurrencyType(sourceCurrencyType);
  };

  const handleConvert = () => {
    fetch(`https://v6.exchangerate-api.com/v6/cc2fee393e72eaad68b45265/pair/${sourceCurrencyType}/${targetCurrencyType}/${sourceCurrency}`)
      .then(res => res.json())
      .then(data => {
        setConvertedAmount(data.conversion_result);
        setTargetCurrency(data.conversion_result); 
      });
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Currency Converter</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={sourceCurrency}
              onChange={(e) => setSourceCurrency(e.target.value)}
              placeholder="Amount"
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={sourceCurrencyType}
              onChange={(e) => setSourceCurrencyType(e.target.value)}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currencyOptions.map((currency, index) => (
                <option key={index} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <button 
            onClick={handleSwap} 
            className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 transition flex justify-center items-center mx-auto"
          >
            <ArrowLeftRight size={20} />
          </button>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
              placeholder="Converted Amount"
              className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
            <select
              value={targetCurrencyType}
              onChange={(e) => setTargetCurrencyType(e.target.value)}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currencyOptions.map((currency, index) => (
                <option key={index} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <button 
            onClick={handleConvert} 
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition w-full text-lg"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
