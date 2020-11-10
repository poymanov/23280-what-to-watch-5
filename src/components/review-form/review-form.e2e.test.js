import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from "./review-form";

configure({adapter: new Adapter()});

const noop = () => {};

it(`Submit review form`, () => {
  const onSubmit = jest.fn();

  const wrapper = mount(<ReviewForm flushReviewFormError={noop} id={`1`} onSubmit={onSubmit} />);

  const playButton = wrapper.find(`.add-review__form`);
  playButton.simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

