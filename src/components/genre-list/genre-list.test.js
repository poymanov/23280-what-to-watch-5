import React from "react";
import renderer from "react-test-renderer";
import {GenreList} from "./genre-list";

const noop = () => {};

const genres = [
  {
    id: `all`,
    title: `All`
  },
  {
    id: `comedy`,
    title: `Comedy`
  },
];

it(`Should GenreList render correctly`, () => {
  const tree = renderer
    .create(<GenreList activeGenreId={`all`} changeGenre={noop} genres={genres}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
