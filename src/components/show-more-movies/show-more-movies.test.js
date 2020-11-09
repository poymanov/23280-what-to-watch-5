import React from "react";
import renderer from "react-test-renderer";
import {ShowMoreMovies} from "./show-more-movies";

const noop = () => {};

it(`Should ShowMoreMovies render correctly`, () => {
  const tree = renderer
    .create(<ShowMoreMovies currentGenreId={`1`} nextItemId={1} showMore={noop}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
