import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <>
      <div className="movie-carousel">
        <Slider {...settings}>
          {movies.map((movie) => (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div key={movie.id} className="movie-image">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={movie.title}
                />
              </div>
              <div className="movie-info">
                <div className="movie-title">{movie ? movie.title : ""}</div>
                <div className="movie-release-date">
                  {movie ? movie.release_date : ""}
                  <span className="movie-rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="movie-description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MovieCarousel;
