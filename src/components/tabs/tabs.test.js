import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";
import {TabsData} from "../../etc/tabs.data";

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

it(`Should Tabs render correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter history={browserHistory}><Tabs activeTab={TabsData.DETAILS} movie={movie} onClickTab={noop}/></BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
