import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const API_KEY = import.meta.env.VITE_API_AUTH;

const fetchData = async (endPoint) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${endPoint}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}

const useFetchData = (endPoint, genre) => {
  return useQuery({
    queryKey: [endPoint],
    queryFn: () => fetchData(endPoint),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  })
};

export default useFetchData;
