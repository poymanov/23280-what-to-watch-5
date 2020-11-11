import React from "react";
import renderer from "react-test-renderer";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";
import Footer from "./footer";

it(`Should Footer render correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter history={browserHistory}><Footer /></BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
