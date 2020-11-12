import React from "react";
import renderer from "react-test-renderer";
import {GuestRoute} from "./guest-route";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

const noop = () => {};

it(`Should GuestRoute render correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter history={browserHistory}>
      <GuestRoute isUserAuth={false} authorizationStatus={``} exact={true} path={`/`} render={noop} checkAuth={noop} />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
