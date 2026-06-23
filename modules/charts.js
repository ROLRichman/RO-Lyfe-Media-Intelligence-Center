const ctx = document.getElementById("chart");

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00"],
    datasets: [{
      label: "Market Movement",
      data: marketData.SPY
    }]
  }
});
