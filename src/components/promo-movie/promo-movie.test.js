import React from "react";
import renderer from "react-test-renderer";
import {PromoMovie} from "./promo-movie";

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

describe(`Should PromoMovie render correctly`, () => {
  it(`Without movie`, () => {
    const tree = renderer
      .create(<PromoMovie isUserAuth={false} addToFavorite={noop} fetchPromoMovie={noop} onPlayButtonClick={noop}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With movie`, () => {
    const tree = renderer
      .create(<PromoMovie isUserAuth={false} addToFavorite={noop} promo={movie} fetchPromoMovie={noop} onPlayButtonClick={noop}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With auth user`, () => {
    const tree = renderer
      .create(<PromoMovie isUserAuth={true} addToFavorite={noop} promo={movie} fetchPromoMovie={noop} onPlayButtonClick={noop}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


