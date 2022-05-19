import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data_ = await resp.json();
        setData(data_);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsError(true);
        setIsLoading(false);
      }
    };
    if (!!url) fetchData();
  }, [url]);
  return { data, isLoading, isError, setUrl };
};
