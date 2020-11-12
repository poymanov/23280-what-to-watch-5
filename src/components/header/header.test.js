import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../etc/browser-history";

const noop = () => {};

const currentUser = {
  id: 1,
  name: `test`,
  email: `test`,
  avatarUrl: `test`
};

describe(`Should Header render correctly`, () => {
  it(`Not auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter history={browserHistory}>
            <Header checkAuth={noop} currentUser={null}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter history={browserHistory}>
            <Header checkAuth={noop} currentUser={currentUser}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With content`, () => {
    const tree = renderer
      .create(
          <BrowserRouter history={browserHistory}>
            <Header checkAuth={noop} currentUser={null}><span>test</span></Header>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


