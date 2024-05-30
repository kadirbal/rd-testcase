<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Data Usage",
      data: [0, 3, 5, 0, 9, 5, 9],
      fill: false,
      borderColor: "black",
      tension: 0.4,
      pointRadius: 0, // Removes the indicator dots
      pointHoverRadius: 0, // Removes the dots on hover
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: false,
      grid: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return "Data Usage: " + context.raw + " GB";
        },
      },
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
</script>

<template>
  <div class="h-[360px]">
    <Line :data="data" :options="options" />
  </div>
</template>
