import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";
import {extend} from "../../utils/utils";

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
  scoresCount: 1,
  director: `test`,
  starring: [`test`],
  runTime: 1,
  genre: `test`,
  released: 1,
  isFavorite: false,
};

const movieWithBadRating = extend(movie, {rating: 3});
const movieWithNormalRating = extend(movie, {rating: 5});
const movieWithGoodRating = extend(movie, {rating: 8});
const movieWithVeryGoodRating = extend(movie, {rating: 9});
const movieWithAwesomeRating = extend(movie, {rating: 10});

describe(`Should MovieOverview render correctly`, () => {
  it(`With bad rating`, () => {
    const tree = renderer
      .create(<MovieOverview movie={movieWithBadRating}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With normal rating`, () => {
    const tree = renderer
      .create(<MovieOverview movie={movieWithNormalRating}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With good rating`, () => {
    const tree = renderer
      .create(<MovieOverview movie={movieWithGoodRating}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With very good rating`, () => {
    const tree = renderer
      .create(<MovieOverview movie={movieWithVeryGoodRating}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With very awesome rating`, () => {
    const tree = renderer
      .create(<MovieOverview movie={movieWithAwesomeRating}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


