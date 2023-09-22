import { useState, useEffect, useCallback } from "react";

const BASE_URL = "https://corona.lmao.ninja/v2";

export function useCoronaAPI(
  path,
  { initialData = {}, converter = (data) => data, refetchInterval = null }
) {
  const [data, setData] = useState(initialData);
  const convertData = useCallback(converter, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}${path}`);
        const data = await response.json();
        console.log(data);
        setData(convertData(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    if (refetchInterval) {
      const intervalId = setInterval(fetchData, refetchInterval);
      return () => clearInterval(intervalId);
    }
  }, [convertData, path, refetchInterval]);

  return data;
}