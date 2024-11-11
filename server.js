const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// اطلاعات توکن
const tokenDetails = {
  name: "Bitcoin",
  symbol: "BTC",
  contractAddress: "0x438f803cd4ff5192ca828cd4c595d65afca3b21c",
  logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035",
  decimals: 18,
  totalSupply: "5,999,999,999,995",
  network: "Fantom"
};

// API Endpoint برای گرفتن اطلاعات توکن
app.get('/getTokenDetails', (req, res) => {
  res.json(tokenDetails);
});

// راه‌اندازی سرور
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
