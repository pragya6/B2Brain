import { useState, useCallback } from "react";

const useFetch = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://tva.staging.b2brain.com/search/autocomplete_org_all/"
      );

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();

      const dataFromFetch = [];

      for (const key in data) {
        dataFromFetch.push({
          id: key,
          slug: data[key].slug,
          company: data[key].company,
          logo: data[key].logo,
          website: data[key].website,
        });
      }
      setItems(dataFromFetch);
    } catch (err) {
      setError(err.message || "Something Went Wrong!");
    }
    setIsLoading(false);
  }, []);
  return { error, items, isLoading, getData };
};

export default useFetch;
