import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Header} from "./header";

configure({adapter: new Adapter()});

const currentUser = {
  id: 1,
  name: `test`,
  email: `test`,
  avatarUrl: `test`
};

it(`Check auth`, () => {
  const checkUser = jest.fn();

  shallow(<Header checkAuth={checkUser} currentUser={currentUser}/>);

  expect(checkUser).toHaveBeenCalledTimes(1);
});
