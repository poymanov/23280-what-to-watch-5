import React from "react";
import renderer from "react-test-renderer";
import {FavoriteList} from "./favorite-list";
import {Provider} from "react-redux";
import {initStore} from "../../store/bootstrap";
import browserHistory from "../../etc/browser-history";
import {Router as BrowserRouter} from "react-router-dom";

const noop = () => {};

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

it(`Should MyList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={initStore()}>
          <BrowserRouter history={browserHistory}>
            <FavoriteList fetchUserFavorites={noop} movies={movies}/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
