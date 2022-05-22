import { useEffect, useState } from "react";
import { fetchDailyData } from "../../API";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Filler,
  Tooltip,
  Legend
);

function Chart({ data: { confirmed, recovered, deaths }, country }) {
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    (async () => {
      setDaily(await fetchDailyData());
    })();
  }, [setDaily]);

  const lineChart = daily.length ? (
    <Line
      data={{
        labels: daily.map((i) => new Date(i.date).toLocaleDateString()),
        datasets: [
          {
            data: daily.map((i) => i.deaths),
            label: "Deaths",
            backgroundColor: "rgba(225,0,0,0.5)",
            fill: true,
            borderColor: "red",
          },
          {
            data: daily.map((i) => i.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
            backgroundColor: "rgba(0,0,225,0.5)",
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      type={"bar"}
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: `Current State in ${country}`,
            backgroundColor: [
              "rgba(165, 55, 253,0.5)",
              "rgba(0,225,0,0.5)",
              "rgba(225,0,0,0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
    />
  ) : null;

  if (daily.length === 0) {
    return <h1 className="text-center">Loading...</h1>;
  } else
    return (
      <div className="w-[95%] lg:w-[75%] mx-auto">
        {country ? barChart : lineChart}
      </div>
    );
}

export default Chart;
