import React from "react";
import renderer from "react-test-renderer";
import Player from "./player";

const noop = () => {};

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

describe(`Should Player render correctly`, () => {
  it(`Playing`, () => {
    const tree = renderer
      .create(<Player
        movie={movie}
        isPlaying={true}
        initVideo={noop}
        handleTimeUpdate={noop}
        handleEnded={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Paused`, () => {
    const tree = renderer
      .create(<Player
        movie={movie}
        isPlaying={false}
        initVideo={noop}
        handleTimeUpdate={noop}
        handleEnded={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


