import React from "react";
import "./Selection.scss";

const Selection = props => {
  return (
    <select value={props.genre} onChange={props.onGenreChange}>
      {props.genres.map(genre => {
        return (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        );
      })}
    </select>
  );
};

export default Selection;
