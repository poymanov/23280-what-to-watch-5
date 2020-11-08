import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Movie} from "./movie";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

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

const relatedMovies = {
  items: [movie],
  pagination: {
    lastItemId: 0,
    hasNext: false
  }
};

const noop = () => {};

it(`Fetch current movie`, () => {
  const fetchCurrentMovie = jest.fn();

  shallow(<Movie
    id={`1`}
    movie={movie}
    flushCurrentMovie={noop}
    fetchCurrentMovie={fetchCurrentMovie}
    onPlayButtonClick={noop}
    authorizationStatus={AuthorizationStatus.AUTH}
    relatedMovies={relatedMovies}
  />);

  expect(fetchCurrentMovie).toHaveBeenCalledTimes(1);
});

it(`Flush current movie on on unmount`, () => {
  const flushCurrentMovie = jest.fn();

  const wrapper = shallow(<Movie
    id={`1`}
    movie={movie}
    flushCurrentMovie={flushCurrentMovie}
    fetchCurrentMovie={noop}
    onPlayButtonClick={noop}
    authorizationStatus={AuthorizationStatus.AUTH}
    relatedMovies={relatedMovies}
  />);

  wrapper.unmount();

  expect(flushCurrentMovie).toHaveBeenCalledTimes(1);
});

it(`Click play button`, () => {
  const onPlayButtonClick = jest.fn();

  const wrapper = shallow(<Movie
    id={`1`}
    movie={movie}
    flushCurrentMovie={noop}
    fetchCurrentMovie={noop}
    onPlayButtonClick={onPlayButtonClick}
    authorizationStatus={AuthorizationStatus.AUTH}
    relatedMovies={relatedMovies}
  />);

  const playButton = wrapper.find(`button.btn--play`);
  playButton.simulate(`click`);

  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
});
