# Currency Converter

## Overview
The Currency Converter is a web application that allows users to convert amounts between different currencies using real-time exchange rates fetched from an API. This project demonstrates API integration, asynchronous JavaScript, and DOM manipulation.

## Features
- Convert between multiple currencies.
- Fetch real-time exchange rates via an API call.
- User-friendly and responsive UI.
- Error handling for invalid inputs and API failures.


## How It Works
1. The user selects the source and target currencies.
2. The user enters the amount to be converted.
3. The application fetches the latest exchange rate from the API.
4. The converted amount is displayed instantly.

## API Integration
This project uses a third-party exchange rate API. To set up the API:
1. Register on a currency exchange API provider (e.g., [ExchangeRate-API](https://www.exchangerate-api.com/)).
2. Obtain an API key.
3. Replace `YOUR_API_KEY` in the JavaScript file:
   ```javascript
   fetch(`https://api.exchangerate-api.com/v4/latest/USD?apikey=YOUR_API_KEY`)
   ```


