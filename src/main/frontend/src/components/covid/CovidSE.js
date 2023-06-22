import React, { useState, useEffect, Fragment } from 'react';
import '../Components.css';

import '../../App.css';
import SeStats from './covidSE/SeStats';
import RegionsChart from './covidSE/RegionsChart';
import SelectDataKey from './covidSE/SelectDataKey';

const BASE_URL = 'https://corona.lmao.ninja/v2';
const SE_URL =
  'https://api.apify.com/v2/key-value-stores/8mRFdwyukavRNCr42/records/LATEST?disableRedirect=true';

function CovidSE() {
  const [seStats, setSeStats] = useState({});
  const [regions, setRegions] = useState([]);
  const [key, setKey] = useState('infectedCount');

  useEffect(() => {
    const fetchSeStats = async () => {
      const response = await fetch(`${BASE_URL}/countries/se`);
      const data = await response.json();
      setSeStats(data);
    };

    fetchSeStats();
    const intervalId = setInterval(fetchSeStats, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch(SE_URL);
      const data = await response.json();
      setRegions(data.infectedByRegion);
    };

    fetchRegions();
  }, [key]);

  return (
    <Fragment>
      <h1 className="bebas-font text-center">Sweden COVID-19</h1>
      <SeStats stats={seStats} />
      <SelectDataKey className=" text-center" onChange={(e) => setKey(e.target.value)} />
      <RegionsChart data={regions} dataKey={key} className="" />
    </Fragment>
  );
}

export default CovidSE;
