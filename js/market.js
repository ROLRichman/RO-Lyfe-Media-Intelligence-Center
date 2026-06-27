const ticker = document.getElementById("tickerSelect");

function updateMarket() {
  if (!ticker) return;

  const symbol = ticker.value;
  const data = marketData[symbol];

  const latest = data[data.length - 1];
  const prev = data[data.length - 2];

  document.getElementById("price").innerText = `$${latest}`;

  document.getElementById("trend").innerText =
    latest > prev ? "Bullish 📈" : "Bearish 📉";
}

if (ticker) {
  ticker.addEventListener("change", updateMarket);
  updateMarket();
    }
