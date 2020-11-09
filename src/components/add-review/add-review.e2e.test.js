import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReview} from "./add-review";

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

const noop = () => {};

it(`Fetch current movie for new review`, () => {
  const fetchCurrentMovie = jest.fn();

  shallow(<AddReview
    id={`1`}
    movie={movie}
    flushCurrentMovie={noop}
    fetchCurrentMovie={fetchCurrentMovie}
  />);

  expect(fetchCurrentMovie).toHaveBeenCalledTimes(1);
});

it(`Flush current movie on on unmount`, () => {
  const flushCurrentMovie = jest.fn();

  const wrapper = shallow(<AddReview
    id={`1`}
    movie={movie}
    flushCurrentMovie={flushCurrentMovie}
    fetchCurrentMovie={noop}
  />);

  wrapper.unmount();

  expect(flushCurrentMovie).toHaveBeenCalledTimes(1);
});
