import React, { useEffect, useState } from "react";
import "./ticker.css";

export default function CryptoTicker() {
  const [prices, setPrices] = useState([]);

  async function load() {
    try {
      const r = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,tron&vs_currencies=usd"
      );
      const data = await r.json();

      setPrices([
        { name: "BTC", price: data.bitcoin.usd },
        { name: "ETH", price: data.ethereum.usd },
        { name: "USDT", price: data.tether.usd },
        { name: "BNB", price: data.binancecoin.usd },
        { name: "TRX", price: data.tron.usd },
      ]);
    } catch (err) {
      console.error("Ticker Error:", err);
    }
  }

  useEffect(() => {
    load();
    const interval = setInterval(load, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-container">
      <div className="ticker-scroll">
        {prices.map((coin, i) => (
          <div className="ticker-item" key={i}>
            {coin.name}: ${coin.price}
          </div>
        ))}
      </div>
    </div>
  );
}
