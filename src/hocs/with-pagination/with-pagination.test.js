import React from "react";
import renderer from "react-test-renderer";
import withPagination from "./with-pagination";

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

const MockComponent = () => {
  return (<div />);
};

const MockComponentWrapped = withPagination(MockComponent);

it(`withPagination is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped movies={[movie]}>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
