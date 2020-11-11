import React from "react";
import renderer from "react-test-renderer";
import {GenreList} from "./genre-list";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

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
    .create(
        <BrowserRouter history={browserHistory}>
          <GenreList activeGenreId={`all`} changeGenre={noop} genres={genres}/>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
