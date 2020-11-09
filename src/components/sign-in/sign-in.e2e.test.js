import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

configure({adapter: new Adapter()});

it(`Submit sign in form`, () => {
  const onSubmit = jest.fn();

  const wrapper = mount(<BrowserRouter
    history={browserHistory}>
    <SignIn onSubmit={onSubmit} />
  </BrowserRouter>);

  const signInForm = wrapper.find(`.sign-in__form`);
  signInForm.simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
