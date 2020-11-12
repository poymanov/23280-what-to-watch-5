import React from "react";
import renderer from "react-test-renderer";
import AuthUser from "./auth-user";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

const currentUser = {
  id: 1,
  name: `test`,
  email: `test`,
  avatarUrl: `test`
};

it(`Should AuthUser render correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter history={browserHistory}><AuthUser currentUser={currentUser} /></BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
