import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PromoMovie} from "./promo-movie";

configure({adapter: new Adapter()});

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

it(`Fetch promo movie`, () => {
  const fetchCurrentMovie = jest.fn();

  shallow(<PromoMovie isUserAuth={false} addToFavorite={noop} removeFromFavorite={noop} promo={movie} fetchPromoMovie={fetchCurrentMovie} onPlayButtonClick={noop} />);

  expect(fetchCurrentMovie).toHaveBeenCalledTimes(1);
});

it(`Click play button`, () => {
  const onPlayButtonClick = jest.fn();

  const wrapper = shallow(<PromoMovie isUserAuth={false} addToFavorite={noop} removeFromFavorite={noop} promo={movie} fetchPromoMovie={noop} onPlayButtonClick={onPlayButtonClick} />);

  const playButton = wrapper.find(`button.btn--play`);
  playButton.simulate(`click`);

  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
});
