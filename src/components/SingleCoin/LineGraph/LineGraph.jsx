import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useSelector } from "react-redux";
import { getDataByCurrency } from "../../../utils";

// line graph ishlashi uchun registratsiya qilamiz
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const getLabels = (activePage) => {
  switch (activePage) {
    case "24 Hours":
      return [
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00",
      ];
    case "30 Days":
      return [
        "1-d",
        "2-d",
        "3-d",
        "4-d",
        "5-d",
        "6-d",
        "7-d",
        "8-d",
        "9-d",
        "10-d",
        "11-d",
        "12-d",
        "13-d",
        "14-d",
        "15-d",
        "16-d",
        "17-d",
        "18-d",
        "19-d",
        "20-d",
        "21-d",
        "22-d",
        "23-d",
        "24-d",
        "25-d",
        "26-d",
        "27-d",
        "28-d",
        "29-d",
        "30-d",
      ];
    case "3 Months":
      return [
        "7-days",
        "14-days",
        "21-days",
        "28-days",
        "35-days",
        "42-days",
        "49-days",
        "56-days",
        "63-days",
        "70-days",
        "77-days",
        "84-days",
        "91-days",
      ];
    case "1 Year":
      return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    default:
      return [
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00",
      ];
  }
};
const generateData = (labels, peak, low, current) => {
  const result = labels.map((_, i) => {
    if (i === labels.length - 1) {
      return current;
    } else {
      const value = Math.random() * (peak - low) + low;
      return value;
    }
  });

  return result;
};

export default function LineGraph({ coin, activePage }) {
  const { currency } = useSelector((state) => state.project);

  const data = {
    labels: getLabels(activePage),
    datasets: [
      {
        label: `Price (Past ${activePage}) in ${currency.currency}`,
        data: generateData(
          getLabels(activePage),
          getDataByCurrency(coin.market_data.high_24h, currency.currency),
          getDataByCurrency(coin.market_data.low_24h, currency.currency),
          getDataByCurrency(coin.market_data.current_price, currency.currency)
        ),
        fill: true,
        tension: 0.2,
        backgroundColor: "rgba(135, 206, 235,0)",
        borderColor: "rgba(135, 206, 235,1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
}
