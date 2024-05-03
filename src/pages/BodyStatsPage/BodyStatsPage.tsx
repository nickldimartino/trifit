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
  Title,
} from "chart.js";

// Internal
import NewBodyStatForm from "../../components/BodyStats/NewBodyStatForm";
import * as bodyStatsService from "../../utilities/bodyStats-service";

// Types
import {
  BodyStarCoordinates,
  BodyStatType,
  ScatterPlotData,
} from "../../types";

// Register the ChartJS elements
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title
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
        labels: "Weight vs Calories",
        data: scatter,
        backgroundColor: "#E4CC37",
        borderColor: "black",
        pointBorderColor: "black",
      },
    ],
  };

  // options for the chart
  let options: any = {
    scales: {
      x: {
        min: 0,
        max: 4000,
        scaleLabel: {
          display: true,
          labelString: "Calories (kcal)"
        },
        title: {
          display: true,
          text: "Calories (kcal)"
        }
      },
      y: {
        min: 100,
        max: 250,
        scaleLabel: {
          display: true,
          labelString: "Weight (lbs)"
        },
        title: {
          display: true,
          text: "Weight (lbs)"
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        position: "top",
        text: "Calories (kcal) vs Weight (lbs)"
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
      <div className="grid grid-cols-2 mt-10">
        <NewBodyStatForm addBodyStat={addBodyStat} />
        <div
          style={{ width: "600px", height: "300px", backgroundColor: "white" }}
          className="mr-10"
        >
          <Scatter
            data={data}
            options={options}
            className=" border-2 border-black rounded-sm shadow-lg"
          ></Scatter>
        </div>
      </div>
    </>
  );
}
