import StarRateIcon from "@mui/icons-material/StarRate";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/3/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
    window.scrollTo(0, 0);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <div
        className="movie-details-header"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            movie && movie.backdrop_path
          })`,
        }}
      >
        <h1>{movie.title}</h1>
      </div>
      <div className="movie-details-content">
        <p>{movie.overview}</p>
        <p>
          <strong>Release Year:</strong>{" "}
          {moment(movie.release_date).format("YYYY")}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}{" "}
          <StarRateIcon fontSize="small" className="movie-star" />
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Production Companies:</strong>{" "}
          {movie.production_companies.map((company) => company.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
