import React from "react";
import renderer from "react-test-renderer";
import {MovieReviews} from "./movie-reviews";

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

const reviews = [{
  id: 1,
  comment: `test`,
  date: `2020-12-20 12:12:12`,
  rating: 5,
  user: {
    id: 1,
    name: `test`,
  }
}];

describe(`Should MovieReviews render correctly`, () => {
  it(`Without reviews`, () => {
    const tree = renderer
      .create(<MovieReviews fetchMovieReviews={noop} movie={movie} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With reviews`, () => {
    const tree = renderer
      .create(<MovieReviews fetchMovieReviews={noop} movie={movie} reviews={reviews} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
