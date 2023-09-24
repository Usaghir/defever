import React, { useReducer, useState, useEffect } from "react";

import GlobalStats from "./GlobalStats";
import CountriesChart from "./CountriesChart";
import SelectDataKey from "./SelectDataKey";
import { useCoronaAPI } from "../useCoronaAPI";
import HistoryChartGroup from "./HistoryChartGroup";
import LoadingSkeleton from "../../../shared/LoadingSkeleton";

const initialState = {
  key: "cases",
  country: "",
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
    refetchInterval: null,
  });

  const [isLoadingCountries, setIsLoadingCountries] = useState(true);

  const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    converter: (data) => data.slice(0, 15),
  });

  // Check if the countries data is available
  useEffect(() => {
    if (countries && countries.length > 0) {
      setIsLoadingCountries(false);
    }
  }, [countries]);

  const history = useCoronaAPI(`/historical/${country}`, {
    initialData: {},
    converter: (data) => data.timeline,
  });

  if (isLoadingCountries) return <LoadingSkeleton />;

  return (
    <AppDispatch.Provider value={dispatch}>
      <div className=" ">
        <h2 className="bebas-font text-center">COVID-19</h2>
        <GlobalStats stats={globalStats} />

        <SelectDataKey />

        {countries.length > 0 && (
          <CountriesChart data={countries} dataKey={key} />
        )}

        {country ? (
          <div className="text-center ">
            <h2 className="bebas-font py-4 my-4">History for {country}</h2>
            <HistoryChartGroup history={history} lastDays={lastDays} />
          </div>
        ) : (
          <p className="bebas-font text-center mt-4 pb-4">
            Click on a country bar to see its history
          </p>
        )}
      </div>
    </AppDispatch.Provider>
  );
}

export default CovidWorld;
