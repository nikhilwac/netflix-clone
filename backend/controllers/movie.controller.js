import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie = data.results[Math.floor() * data.results.length];
    res.json({ success: true, content: randomMovie });
  } catch (error) {
    res.status(500).json({ success: true, message: "Internal server error" });
  }
}
