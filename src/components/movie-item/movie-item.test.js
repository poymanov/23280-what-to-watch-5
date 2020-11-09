import React from "react";
import renderer from "react-test-renderer";
import MovieItem from "./movie-item";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

const noop = () => {};

const movie = {
  id: 1,
  name: `test`,
  posterImage: `test`,
  previewImage: `test`,
  backgroundImage: `test`,
  backgroundColor: `test`,
  videoLink: `test`,
  previewVideoLink: `test`,
  description: `test`,
  rating: 1,
  scoresCount: 1,
  director: `test`,
  starring: [`test`],
  runTime: 1,
  genre: `test`,
  released: 1,
  isFavorite: false,
};

describe(`Should MovieItem render correctly`, () => {
  it(`Without trailer`, () => {
    const tree = renderer
      .create(<BrowserRouter history={browserHistory}>
        <MovieItem movie={movie} onMovieHover={noop} onMovieLeave={noop} isShowTrailer={false} />
      </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With trailer`, () => {
    const tree = renderer
      .create(<BrowserRouter history={browserHistory}>
        <MovieItem movie={movie} onMovieHover={noop} onMovieLeave={noop} isShowTrailer={true} />
      </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
