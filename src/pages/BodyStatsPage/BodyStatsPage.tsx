/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useEffect, useState } from "react";
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

// Internal
import NewBodyStatForm from "../../components/BodyStats/NewBodyStatForm";
import * as bodyStatsService from "../../utilities/bodyStats-service";

// Types
import { BodyStarCoordinates, BodyStatType, ScatterPlotData } from "../../types";

// Register the ChartJS elements
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

/*------------------------------------- Functions --------------------------------------*/
export default function BodyStatsPage() {
  // body stats state
  const [bodyStats, setBodyStats] = useState([]);

  // new body stats state
  const [newBodyStats, setNewBodyStats] = useState<BodyStatType[]>([]);

  // object to save the scatterplot data
  let scatter: Object[] = [];

  // map through the body stats and push each one as x,y coords to the scatterplot data
  bodyStats.forEach((b: any) => {
    let bodystat: BodyStarCoordinates = {
      x: b.calories,
      y: b.weight,
    };
    scatter.push(bodystat);
  });

  // data for the chart
  let data: ScatterPlotData = {
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

  // options for the chart
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

  // get the body stats
  async function getBodyStats() {
    // get the body stats from the database
    let newBodyStatSet = await bodyStatsService.getBodyStatData();

    // set the body stats state to the retrieved body stats
    setBodyStats(newBodyStatSet);
  }

  // add a body stat
  async function addBodyStat(bodyStat: BodyStatType) {
    // add the body stat to the database
    await bodyStatsService.createBodyStatData(bodyStat);

    // set the body stats state with the new body stat
    setNewBodyStats([...newBodyStats, bodyStat]);
  }

  // render the page once on a state change
  useEffect(() => {
    getBodyStats();
  }, [newBodyStats]);

  // render the Body Stats Page
  return (
    <>
      <h1>Body Stats Page</h1>
      <div
        style={{ width: "600px", height: "300px", backgroundColor: "white" }}
      >
        <Scatter data={data} options={options}></Scatter>
      </div>
      <NewBodyStatForm addBodyStat={addBodyStat} />
    </>
  );
}
