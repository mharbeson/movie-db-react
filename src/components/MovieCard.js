import StarRateIcon from "@mui/icons-material/StarRate";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import React from "react";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <NavLink
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className="movie-card">
        <Image
          alt={`${movie.title} Poster`}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="movie-image"
        />
        <div className="movie-overlay">
          <div className="movie-title">{movie ? movie.title : ""}</div>
          <div className="movie-release">
            Release:{" "}
            {movie ? moment(movie.release_date).format("MM-D-YYYY") : ""}
            <span className="movie-rating">
              {movie ? movie.vote_average : ""}
              <StarRateIcon fontSize="small" className="movie-star" />
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
