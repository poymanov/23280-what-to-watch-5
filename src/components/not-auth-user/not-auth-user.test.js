import React from "react";
import renderer from "react-test-renderer";
import NotAuthUser from "./not-auth-user";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

it(`Should NotAuthUser render correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter history={browserHistory}><NotAuthUser /></BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
