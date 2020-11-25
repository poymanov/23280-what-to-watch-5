import React from "react";
import renderer from "react-test-renderer";
import ShowMoreMovies from "./show-more-movies";

const noop = () => {};

it(`Should ShowMoreMovies render correctly`, () => {
  const tree = renderer
    .create(<ShowMoreMovies onShowMore={noop}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
