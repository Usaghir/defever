import React, { useContext } from "react";
import HistoryChart from "./HistoryChart";
import { transformHistory } from "../utils";
import { AppDispatch } from "./CovidWorld";
import { ResponsiveContainer } from "recharts";

function HistoryChartGroup({ history = {}, lastDays = {} }) {
  const dispatch = useContext(AppDispatch);

  function handleLastDaysChange(e, key) {
    dispatch({ type: "SET_LASTDAYS", key, days: e.target.value });
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <ResponsiveContainer width="100%" height={300}>
            <HistoryChart
              title="Cases"
              data={transformHistory(history.cases)}
              lastDays={lastDays.cases}
              onLastDaysChange={(e) => handleLastDaysChange(e, "cases")}
            />
          </ResponsiveContainer>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <ResponsiveContainer width="100%" height={300}>
            <HistoryChart
              title="Deaths"
              data={transformHistory(history.deaths)}
              lastDays={lastDays.deaths}
              onLastDaysChange={(e) => handleLastDaysChange(e, "deaths")}
            />
          </ResponsiveContainer>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <ResponsiveContainer width="100%" height={300}>
            <HistoryChart
              title="Recovered"
              data={transformHistory(history.recovered)}
              lastDays={lastDays.recovered}
              onLastDaysChange={(e) => handleLastDaysChange(e, "recovered")}
            />
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default HistoryChartGroup;
