import { useState } from 'react';
import Components from './components';
import './App.css';

function App() {
  const [fromCurrency, setFromCurrency] = useState('usd'); // Currency to convert from
  const [toCurrency, setToCurrency] = useState('eur'); // Currency to convert to
  const [amount, setAmount] = useState(0); // Amount to convert
  const [convertedAmount, setConvertedAmount] = useState(0); // Converted amount

  // Exchange rates (example rates, replace with real-time data)
  const exchangeRates = {
    usd: { eur: 0.93, gbp: 0.80, usd: 1 }, // 1 USD = 0.93 EUR, 1 USD = 0.80 GBP
    eur: { usd: 1.07, gbp: 0.86, eur: 1 }, // 1 EUR = 1.07 USD, 1 EUR = 0.86 GBP
    gbp: { usd: 1.25, eur: 1.16, gbp: 1 }, // 1 GBP = 1.25 USD, 1 GBP = 1.16 EUR
  };

  // Handle currency conversion
  const handleConvert = () => {
    const rate = exchangeRates[fromCurrency][toCurrency]; // Get the exchange rate
    const result = amount * rate; // Calculate the converted amount
    setConvertedAmount(result.toFixed(2)); // Set the result (rounded to 2 decimal places)
  };

  // Swap "from" and "to" currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900">
        <div className="w-full max-w-md p-6 rounded-2xl bg-white/80 backdrop-blur-md">
          <div className="space-y-4">
            {/* From Currency */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-black">
                <span>From</span>
                <span>Currency Type</span>
              </div>
              <Components
                selectedCurrency={fromCurrency}
                onCurrencyChange={(e) => setFromCurrency(e.target.value)}
                amount={amount}
                onAmountChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative">
              <div className="absolute top-1 left-1/2 transform -translate-x-1 -translate-y-1/2 -rotate-90 cursor-pointer m-1">
                <button
                  className="rounded-md bg-blue-600 hover:bg-blue-700 p-2"
                  onClick={handleSwapCurrencies}
                >
                  <span className="text-white">↑↓</span>
                </button>
              </div>
            </div>

            {/* To Currency */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-black ">
                <span>To</span>
                <span>Currency Type</span>
              </div>
              <Components
                selectedCurrency={toCurrency}
                onCurrencyChange={(e) => setToCurrency(e.target.value)}
                amount={convertedAmount}
                onAmountChange={() => {}} // Disabled for "to" currency
              />
            </div>

            {/* Convert Button */}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 mt-4"
              onClick={handleConvert}
            >
              Convert
            </button>

            {/* Display Converted Amount */}
            {convertedAmount > 0 && (
              <div className="mt-4 text-center text-black">
                <p>
                  Converted Amount: {convertedAmount} {toCurrency.toUpperCase()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;