import React from "react";
import "./MovieListItem.scss";

const MovieListItem = props => {
  const { title, poster_path } = props.movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <li className="movie-item">
      <img src={imgUrl} alt="movieImage" />
      <span>{title}</span>
    </li>
  );
};

export default MovieListItem;
