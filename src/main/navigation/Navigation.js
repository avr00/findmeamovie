import React from "react";
import "./Navigation.scss";
import Selection from "./Selection";
import Slider from "./Slider";

class Navigation extends React.Component {
  state = {
    genre: "comedy",
    genres: [],
    year: {
      label: "year",
      min: 1990,
      max: 2018,
      step: 1,
      value: { min: 2000, max: 2017 }
    },
    rating: {
      label: "rating",
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: "runtime",
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  };

  componentDidMount() {
    const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }&language=en-US`;
    fetch(genresURL)
      .then(response => response.json())
      .then(data => this.setState({ genres: data.genres }))
      .catch(error => console.log(error));
  }

  onChange = data => {
    this.setState({
      [data.type]: {
        ...this.state[data.type],
        value: data.value
      }
    });
  };

  onGenreChange = event => {
    this.setState({ genre: event.target.value });
  };
  render() {
    return (
      <section className="navigation">
        <Selection
          onGenreChange={this.onGenreChange}
          genre={this.state.genre}
          genres={this.state.genres}
        />

        <Slider data={this.state.year} onChange={this.onChange} />
        <Slider data={this.state.rating} onChange={this.onChange} />
        <Slider data={this.state.runtime} onChange={this.onChange} />
      </section>
    );
  }
}

export default Navigation;