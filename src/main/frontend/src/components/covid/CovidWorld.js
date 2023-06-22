import React, { useReducer } from 'react';
import '../Components.css';

import '../../App.css';
import GlobalStats from './covidWorld/GlobalStats';
import CountriesChart from './covidWorld/CountriesChart';
import SelectDataKey from './covidWorld/SelectDataKey';
import { useCoronaAPI } from './useCoronaAPI';
import HistoryChartGroup from './covidWorld/HistoryChartGroup';

const initialState = {
  key: 'cases',
  country: null,
  lastDays: {
    cases: 30,
    deaths: 30,
    recovered: 30,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_KEY':
      return { ...state, key: action.key };
    case 'SET_COUNTRY':
      return { ...state, country: action.country };
    case 'SET_LASTDAYS':
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

  const globalStats = useCoronaAPI('/all', {
    initialData: {},
    refetchInterval: 10000,
  });

  const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    converter: (data) => data.slice(0, 21),
  });

  const history = useCoronaAPI(`/historical/${country}`, {
    initialData: {},
    converter: (data) => data.timeline,
  });

  return (
    <AppDispatch.Provider value={dispatch}>
      <div className="mb-5 pb-5">
        <h1 className="bebas-font text-center">World COVID-19</h1>
        <GlobalStats stats={globalStats} />

        <SelectDataKey />

        <CountriesChart data={countries} dataKey={key} />

        {country ? (
          <div className="text-center">
            <h2 className="bebas-font">History for {country}</h2>
            <HistoryChartGroup history={history} lastDays={lastDays} />
          </div>
        ) : (
          <p className="bebas-font text-center">Click on a country bar to see it's history</p>
        )}
      </div>
    </AppDispatch.Provider>
  );
}

export default CovidWorld;
