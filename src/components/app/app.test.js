import React from "react";
import renderer from "react-test-renderer";
import {Router as BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {initStore} from "../../store/bootstrap";
import browserHistory from "../../etc/browser-history";
import {App} from "./app";

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

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={initStore()}>
          <BrowserRouter history={browserHistory}>
            <App movie={movie} />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
