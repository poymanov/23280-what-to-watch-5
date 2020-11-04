import React from "react";
import renderer from "react-test-renderer";
import PlayerPlayingControls from "./player-playing-controls";

const noop = () => {};

describe(`Should PlayerPlayingControls render correctly`, () => {
  it(`Playing`, () => {
    const tree = renderer
      .create(<PlayerPlayingControls isPlaying={true} handleOnClick={noop}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Paused`, () => {
    const tree = renderer
      .create(<PlayerPlayingControls isPlaying={false} handleOnClick={noop}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


