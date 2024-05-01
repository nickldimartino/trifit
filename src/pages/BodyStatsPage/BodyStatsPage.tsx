import { Scatter } from "react-chartjs-2";
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
import { useState, useEffect } from "react";
import * as bodyStatsServices from "../../utilities/bodyStats-service";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function BodyStatsPage({ user }: { user: UserDataType }) {
  const [bodyStats, setBodyStats] = useState([]);
  const [newBodyStats, setNewBodyStats] = useState<BodyStatType[]>([]);
  let scatter: Object[] = [];

  bodyStats.forEach((b: any) => {
    let obj = {
      x: b.calories,
      y: b.weight
    }
    scatter.push(obj);
  });

  let data = {
    datasets: [
      {
        labels: "Weight Over Time",
        data: scatter,
        backgroundColor: "#EA5455",
        borderColor: "black",
        pointBorderColor: "black",
      },
    ],
  };

  let options: any = {
    plugins: {
      legend: true,
    },
    scales: {
      x: {
        min: 0,
        max: 4000,
      },
      y: {
        min: 100,
        max: 250,
      },
    },
  };

  async function getBodyStats() {
    let newBodyStatSet = await bodyStatsServices.getBodyStatData();
    setBodyStats(newBodyStatSet);
  }

  async function addBodyStat(bodyStat: BodyStatType) {
    await bodyStatsServices.createBodyStatData(bodyStat);
    setNewBodyStats([...newBodyStats, bodyStat]);
  }

  useEffect(() => {
    getBodyStats();
  }, [newBodyStats]);

  return (
    <>
      <h1>Body Stats Page</h1>
      <div
        style={{ width: "600px", height: "300px", backgroundColor: "white" }}
      >
        <Scatter data={data} options={options}></Scatter>
      </div>
      <NewBodyStatForm addBodyStat={addBodyStat} user={user} />
    </>
  );
}
