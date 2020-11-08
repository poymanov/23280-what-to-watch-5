import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieReviews} from "./movie-reviews";

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

const reviews = [{
  id: 1,
  comment: `test`,
  date: `2020-12-20 12:12:12`,
  rating: 5,
  user: {
    id: 1,
    name: `test`,
  }
}];

it(`Fetch movie reviews`, () => {
  const fetchMovieReviews = jest.fn();

  shallow(<MovieReviews movie={movie} reviews={reviews} fetchMovieReviews={fetchMovieReviews} />);

  expect(fetchMovieReviews).toHaveBeenCalledTimes(1);
});
