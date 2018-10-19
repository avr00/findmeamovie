import React from "react";
import "./Movies.scss";
import MovieListItem from "./MovieListItem";
import Button from "../navigation/Button";

const Movies = props => {
  return (
    <section className="movies">
      <ul className="movies">
        {props.movies.map(movie => {
          return <MovieListItem key={movie.id} movie={movie} />;
        })}
      </ul>
      <div className="pagination">
        <Button onClick={props.onPageDecrease}>Previous</Button>
        <span>{`Page ${props.page}`}</span>
        <Button onClick={props.onPageIncrease}>Next</Button>
      </div>
    </section>
  );
};

export default Movies;
