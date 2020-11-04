import React from "react";
import renderer from "react-test-renderer";
import GenreItem from "./genre-item";

const noop = () => {};

const genre = {
  id: `all`,
  title: `All`
};

describe(`Should GenreItem render correctly`, () => {
  it(`Not active item`, () => {
    const tree = renderer
      .create(<GenreItem genre={genre} isActive={false} handleGenreClick={noop} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Active item`, () => {
    const tree = renderer
      .create(<GenreItem genre={genre} isActive={true} handleGenreClick={noop} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
