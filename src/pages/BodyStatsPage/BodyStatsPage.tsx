import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { BodyStatType, UserDataType } from "../../types";
import NewBodyStatForm from "../../components/BodyStats/NewBodyStatForm";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function BodyStatsPage({ user }: { user: UserDataType }) {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        labels: "Sales of the Week",
        data: [3, 6, 9],
        backgroundColor: "#EA5455",
        borderColor: "black",
        pointBorderColor: "black",
        fill: true,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        min: 0,
        max: 4
      },
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  async function addBodyStat(bodyStat: BodyStatType) {
    
  }

  return (
    <>
      <h1>Body Stats Page</h1>
      <div style={{ width: "600px", height: "300px", backgroundColor: "white" }}>
        <Line data={data} options={options}></Line>
      </div>
      <NewBodyStatForm addBodyStat={addBodyStat} user={user}/>
    </>
  );
}
