import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

const movies = [{
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
}];

const moviesWithoutPagination = {
  items: movies,
  pagination: {
    lastItemId: 0,
    hasNext: false
  }
};

describe(`Should MyList render correctly`, () => {
  it(`Without pagination`, () => {
    const tree = renderer
      .create(<BrowserRouter history={browserHistory}><MyList movies={moviesWithoutPagination}/></BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
