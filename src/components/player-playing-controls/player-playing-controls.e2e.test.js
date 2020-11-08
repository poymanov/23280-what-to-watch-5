import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayerPlayingControls from "./player-playing-controls";

configure({adapter: new Adapter()});

it(`Click playing controls button`, () => {
  const handleOnClick = jest.fn();

  const wrapper = shallow(<PlayerPlayingControls isPlaying={false} handleOnClick={handleOnClick} />);

  const button = wrapper.find(`button.player__play`);
  button.simulate(`click`);

  expect(handleOnClick).toHaveBeenCalledTimes(1);
});
