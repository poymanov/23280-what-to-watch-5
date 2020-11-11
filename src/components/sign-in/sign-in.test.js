import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

const noop = () => {};

it(`Should SignIn render correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter history={browserHistory}><SignIn onSubmit={noop}/></BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
