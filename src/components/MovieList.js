import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/3/movie/${
            type ? type : "popular"
          }?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [type]);

  return (
    <div>
      {/* <h1>{type.toUpperCase()} Movies</h1> */}
      <div className="movie-cards">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
