import axios from "axios";

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const fetchFromTMDB = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
    },
  };

  const response = await axios.get(url, options);
  if (response.status !== 200) {
    throw new Error("Failed to fecth data from TMDB", response.statusText);
  }
  return response.data;
};
