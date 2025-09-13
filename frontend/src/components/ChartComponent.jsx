import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ChartComponent({ transactions }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy(); // cleanup old chart before creating new one
    }

    const expenseData = {};
    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        expenseData[t.category] = (expenseData[t.category] || 0) + t.amount;
      });

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(expenseData),
        datasets: [
          {
            data: Object.values(expenseData),
            backgroundColor: ["#e74a3b", "#3498db", "#f39c12", "#1abc9c", "#9b59b6"],
          },
        ],
      },
    });
  }, [transactions]);

  return <canvas ref={chartRef} height="100"></canvas>;
}

export default ChartComponent;
