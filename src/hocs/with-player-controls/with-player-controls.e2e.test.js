import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayerControls from "./with-player-controls";
import PropTypes from "prop-types";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withPlayerControls(MockComponent);

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

it(`Default state`, () => {
  const wrapper = shallow(
      <MockComponentWrapped movie={movie} onChangeFullscreen={noop} onPlayerClose={noop}>
        <React.Fragment />
      </MockComponentWrapped>
  );

  expect(wrapper.state().isPlaying).toEqual(false);
  expect(wrapper.state().isLoading).toEqual(true);
  expect(wrapper.state().duration).toEqual({hours: 0, minutes: 0, seconds: 0});
  expect(wrapper.state().elapsed).toEqual({hours: 0, minutes: 0, seconds: 0});
  expect(wrapper.state().playingPosition).toEqual(0);
  expect(wrapper.state().video).toEqual(null);
});

it(`Handle video end`, () => {
  const wrapper = shallow(
      <MockComponentWrapped movie={movie} onChangeFullscreen={noop} onPlayerClose={noop}>
        <React.Fragment />
      </MockComponentWrapped>
  );

  const videoDuration = {hours: 22, minutes: 59, seconds: 59};

  wrapper.state().duration = videoDuration;
  wrapper.instance().handleEnded();

  expect(wrapper.state().playingPosition).toEqual(0);
  expect(wrapper.state().elapsed).toEqual(videoDuration);
  expect(wrapper.state().isPlaying).toEqual(false);
});

it(`Check playing status`, () => {
  const wrapper = shallow(
      <MockComponentWrapped movie={movie} onChangeFullscreen={noop} onPlayerClose={noop}>
        <React.Fragment />
      </MockComponentWrapped>
  );

  wrapper.state().isPlaying = true;
  wrapper.instance().getIsPlaying();

  expect(wrapper.state().isPlaying).toEqual(true);
});

it(`Init video`, () => {
  const wrapper = shallow(
      <MockComponentWrapped movie={movie} onChangeFullscreen={noop} onPlayerClose={noop}>
        <React.Fragment />
      </MockComponentWrapped>
  );

  const player = {
    duration: 7200
  };

  wrapper.instance().initVideo(player);

  const videoDuration = {hours: 2, minutes: 0, seconds: 0};

  expect(wrapper.state().isLoading).toEqual(false);
  expect(wrapper.state().video).toEqual(player);
  expect(wrapper.state().duration).toEqual(videoDuration);
  expect(wrapper.state().elapsed).toEqual(videoDuration);
});

it(`Handle video current time update`, () => {
  const wrapper = shallow(
      <MockComponentWrapped movie={movie} onChangeFullscreen={noop} onPlayerClose={noop}>
        <React.Fragment />
      </MockComponentWrapped>
  );

  wrapper.state().video = {duration: 7200, currentTime: 3600};
  wrapper.state().duration = {hours: 2, minutes: 0, seconds: 0};

  wrapper.instance().handleTimeUpdate();

  expect(wrapper.state().elapsed).toEqual({hours: 1, minutes: -1, seconds: 0});
  expect(wrapper.state().playingPosition).toEqual(50);
});

it(`Handle click on controls`, () => {
  const wrapper = shallow(
      <MockComponentWrapped movie={movie} onChangeFullscreen={noop} onPlayerClose={noop}>
        <React.Fragment />
      </MockComponentWrapped>
  );

  wrapper.instance().handleClickOnPlayingControls();
  expect(wrapper.state().isPlaying).toEqual(true);

  wrapper.instance().handleClickOnPlayingControls();
  expect(wrapper.state().isPlaying).toEqual(false);
});
