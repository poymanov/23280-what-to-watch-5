import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item";

const MockComponent = () => {
  return (
    <div />
  );
};

const MockComponentWrapped = withActiveItem(MockComponent);

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

it(`withActiveItem is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped movie={movie}>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
