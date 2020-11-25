import React from "react";
import renderer from "react-test-renderer";
import {Movie} from "./movie";
import {Provider} from "react-redux";
import {initStore} from "../../store/bootstrap";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

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

const relatedMovies = [movie];

describe(`Should Movie render correctly`, () => {
  it(`Without movie`, () => {
    const tree = renderer
      .create(
          <Movie
            isUserAuth={false}
            addToFavorite={noop}
            removeFromFavorite={noop}
            id={`1`}
            authorizationStatus={``}
            fetchCurrentMovie={noop}
            flushCurrentMovie={noop}
            onPlayButtonClick={noop} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With movie`, () => {
    const tree = renderer
      .create(
          <Provider store={initStore()}>
            <BrowserRouter history={browserHistory}>
              <Movie
                movie={movie}
                isUserAuth={false}
                addToFavorite={noop}
                removeFromFavorite={noop}
                id={`1`}
                authorizationStatus={``}
                fetchCurrentMovie={noop}
                flushCurrentMovie={noop}
                onPlayButtonClick={noop}
                relatedMovies={relatedMovies}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


