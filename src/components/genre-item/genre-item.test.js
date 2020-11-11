import React from "react";
import renderer from "react-test-renderer";
import GenreItem from "./genre-item";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

const noop = () => {};

const genre = {
  id: `all`,
  title: `All`
};

describe(`Should GenreItem render correctly`, () => {
  it(`Not active item`, () => {
    const tree = renderer
      .create(
          <BrowserRouter history={browserHistory}>
            <GenreItem genre={genre} isActive={false} handleGenreClick={noop} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Active item`, () => {
    const tree = renderer
      .create(
          <BrowserRouter history={browserHistory}>
            <GenreItem genre={genre} isActive={true} handleGenreClick={noop} />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
