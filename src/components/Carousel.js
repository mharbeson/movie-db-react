import StarRateIcon from "@mui/icons-material/StarRate";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import "./Carousel.css";

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Carousel fade controls={false} keyboard>
      {movies.map((movie) => (
        <Carousel.Item>
          <div className="">
            <NavLink
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div key={movie.id} className="carousel-image">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={movie.title}
                  className="d-block w-100 carousel-overlay"
                />
              </div>
              <div className="carousel-movie-info">
                <h3 className="carousel-movie-title">{movie.title}</h3>
                <div className="carousel-movie-release-date">
                  {movie ? moment(movie.release_date).format("MM-D-YYYY") : ""}
                  <span className="carousel-movie-rating">
                    {movie ? movie.vote_average : ""}
                    <StarRateIcon className="carousel-movie-star" />
                  </span>
                </div>
                <div className="carousel-movie-description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </NavLink>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
