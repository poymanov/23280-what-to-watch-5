import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

const noop = () => {};

it(`Should PrivateRoute render correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter history={browserHistory}>
      <PrivateRoute isUserAuth={true} authorizationStatus={``} exact={true} path={`/`} render={noop} />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
