let myChart = null;
const chartLabels = [];
const chartData = [];

function addData() {
  const labelInput = document.getElementById("label");
  const dataInput = document.getElementById("data");

  const labelValue = labelInput.value.trim();
  const dataValue = parseFloat(dataInput.value);

  if (labelValue && !isNaN(dataValue)) {
    chartLabels.push(labelValue);
    chartData.push(dataValue);

    if (myChart) {
      myChart.update();
    } else {
      initChart();
    }

    labelInput.value = "";
    dataInput.value = "";
    labelInput.focus();
  } else {
    alert("Please fill in both fields with valid values.");
  }
}

function removeLastData() {
  if (!myChart || chartLabels.length === 0) {
    alert("No data to remove.");
    return;
  }

  chartLabels.pop();
  chartData.pop();

  myChart.destroy();
  initChart();
}

function initChart() {
  const canvas = document.getElementById("canvas-myChart");
  const ctx = canvas.getContext("2d");
  const chartType = document.getElementById("select-chart-type").value;

  const textColor = "#cbd5e1";

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { color: textColor },
      },
    },
  };

  if (chartType !== "pie") {
    chartOptions.scales = {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: textColor },
      },
      x: {
        grid: { display: false },
        ticks: { color: textColor },
      },
    };
  }

  myChart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: "My Chart",
          data: chartData,
          backgroundColor: [
            "rgba(16, 185, 129, 0.7)",
            "rgba(56, 189, 248, 0.7)",
            "rgba(139, 92, 246, 0.7)",
            "rgba(244, 63, 94, 0.7)",
          ],
          borderColor: "#ffffff",
          borderWidth: 2,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: { color: textColor },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "rgba(255, 255, 255, 0.1)" },
          ticks: { color: textColor },
        },
        x: {
          grid: { display: false },
          ticks: { color: textColor },
        },
      },
    },
  });
}

function updateChartType() {
  if (!myChart) {
    alert(
      "First add some data to initialize the chart before changing its type.",
    );
    return;
  }

  myChart.destroy();
  initChart();
}
