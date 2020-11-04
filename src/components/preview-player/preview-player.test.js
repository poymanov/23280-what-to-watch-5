import React from "react";
import renderer from "react-test-renderer";
import PreviewPlayer from "./preview-player";

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

it(`Should PreviewPlayer render correctly`, () => {
  const tree = renderer
    .create(<PreviewPlayer movie={movie}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


