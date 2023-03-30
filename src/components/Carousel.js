import StarRateIcon from "@mui/icons-material/StarRate";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <NavLink to={`/movie/${movie.id}`}>
            <div key={movie.id} className="carousel-image">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt={movie.title}
              />
            </div>
            <Carousel.Caption>
              <div className="carousel-movie-info">
                <h3 className="carousel-movie-title">{movie.title}</h3>
                <p className="carousel-movie-release-date">
                  {movie ? movie.release_date : ""}
                </p>
                <p className="carousel-movie-rating">
                  {movie ? movie.vote_average : ""}
                  <StarRateIcon />
                </p>
                <div>
                  <p className="carousel-movie-description">
                    {movie ? movie.overview : ""}
                  </p>
                </div>
              </div>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
