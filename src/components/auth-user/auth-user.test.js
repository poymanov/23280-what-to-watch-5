import React from "react";
import renderer from "react-test-renderer";
import AuthUser from "./auth-user";

const currentUser = {
  id: 1,
  name: `test`,
  email: `test`,
  avatarUrl: `test`
};

it(`Should AuthUser render correctly`, () => {
  const tree = renderer
    .create(<AuthUser currentUser={currentUser} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
