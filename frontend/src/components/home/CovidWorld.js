import React, { useReducer } from "react";

import "../../App.css";
import GlobalStats from "./covidWorld/GlobalStats";
import CountriesChart from "./covidWorld/CountriesChart";
import SelectDataKey from "./covidWorld/SelectDataKey";
import { useCoronaAPI } from "./useCoronaAPI";
import HistoryChartGroup from "./covidWorld/HistoryChartGroup";

const initialState = {
  key: "cases",
  country: null,
  lastDays: {
    cases: 30,
    deaths: 30,
    recovered: 30,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_KEY":
      return { ...state, key: action.key };
    case "SET_COUNTRY":
      return { ...state, country: action.country };
    case "SET_LASTDAYS":
      return {
        ...state,
        lastDays: { ...state.lastDays, [action.key]: action.days },
      };
    default:
      return state;
  }
}

export const AppDispatch = React.createContext(null);

function CovidWorld() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { key, country, lastDays } = state;

  const globalStats = useCoronaAPI("/all", {
    initialData: {},
    refetchInterval: 10000,
  });

  const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    converter: (data) => data.slice(0, 10),
  });

  const history = useCoronaAPI(`/historical/${country}`, {
    initialData: {},
    converter: (data) => data.timeline,
  });

  return (
    <AppDispatch.Provider value={dispatch}>
      <div className="App">
        <h1>World COVID-19</h1>
        <GlobalStats stats={globalStats} />

        <SelectDataKey />

        <CountriesChart data={countries} dataKey={key} />

        {country ? (
          <>
            <h2>History for {country}</h2>
            <HistoryChartGroup history={history} lastDays={lastDays} />
          </>
        ) : (
          <h2>Click on a country to show its history.</h2>
        )}
      </div>
    </AppDispatch.Provider>
  );
}

export default CovidWorld;
