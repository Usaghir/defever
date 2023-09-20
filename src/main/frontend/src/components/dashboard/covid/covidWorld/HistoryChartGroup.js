import React, { useContext } from 'react';

import HistoryChart from './HistoryChart';
import { transformHistory } from '../utils';
import { AppDispatch } from '../CovidWorld';
import { ResponsiveContainer } from 'recharts';

function HistoryChartGroup({ history = {}, lastDays = {} }) {
  const dispatch = useContext(AppDispatch);

  function handleLastDaysChange(e, key) {
    dispatch({ type: 'SET_LASTDAYS', key, days: e.target.value });
  }

  return (
    <div className="history-group bebas-font pb-5 mb-5 ">
      <ResponsiveContainer width="33%" height={150}>
        <HistoryChart
          title="Cases"
          data={transformHistory(history.cases)}
          lastDays={lastDays.cases}
          onLastDaysChange={(e) => handleLastDaysChange(e, 'cases')}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        />
      </ResponsiveContainer>
      <ResponsiveContainer width="34%" height={150}>
        <HistoryChart
          title="Deaths"
          data={transformHistory(history.deaths)}
          lastDays={lastDays.deaths}
          onLastDaysChange={(e) => handleLastDaysChange(e, 'deaths')}
        />
      </ResponsiveContainer>
      <ResponsiveContainer width="33%" height={150}>
        <HistoryChart
          title="Recovered"
          data={transformHistory(history.recovered)}
          lastDays={lastDays.recovered}
          onLastDaysChange={(e) => handleLastDaysChange(e, 'recovered')}
        />
      </ResponsiveContainer>
    </div>
  );
}

export default HistoryChartGroup;
