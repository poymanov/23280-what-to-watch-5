import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";

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

it(`Should MovieDetails render correctly`, () => {
  const tree = renderer
    .create(<MovieDetails movie={movie}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
