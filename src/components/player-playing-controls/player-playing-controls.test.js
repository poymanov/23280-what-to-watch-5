import React from "react";
import renderer from "react-test-renderer";
import PlayerPlayingControls from "./player-playing-controls";

const noop = () => {};

describe(`Should PlayerPlayingControls render correctly`, () => {
  it(`Playing`, () => {
    const tree = renderer
      .create(<PlayerPlayingControls isPlaying={true} onClick={noop}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Paused`, () => {
    const tree = renderer
      .create(<PlayerPlayingControls isPlaying={false} onClick={noop}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


