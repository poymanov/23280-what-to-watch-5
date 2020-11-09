import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieItem from "./movie-item";

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

it(`Hover movie item`, () => {
  const onMovieHover = jest.fn();

  const wrapper = shallow(<MovieItem
    movie={movie}
    onMovieHover={onMovieHover}
    onMovieLeave={noop}
    isShowTrailer={false}
  />);

  const movieCard = wrapper.find(`.catalog__movies-card`);
  movieCard.simulate(`mouseenter`);

  expect(onMovieHover).toHaveBeenCalledTimes(1);
});

it(`Leave movie item`, () => {
  const onMovieLeave = jest.fn();

  const wrapper = shallow(<MovieItem
    movie={movie}
    onMovieHover={noop}
    onMovieLeave={onMovieLeave}
    isShowTrailer={false}
  />);

  const movieCard = wrapper.find(`.catalog__movies-card`);
  movieCard.simulate(`mouseleave`);

  expect(onMovieLeave).toHaveBeenCalledTimes(1);
});
