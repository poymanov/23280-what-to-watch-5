import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withNewReviewData from "./with-new-review-data";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withNewReviewData(MockComponent);

it(`Default state`, () => {
  const wrapper = shallow(<MockComponentWrapped id="1" />);

  expect(wrapper.state().rating).toEqual(`3`);
  expect(wrapper.state().text).toEqual(``);
  expect(wrapper.state().formValid).toBeFalsy();
  expect(wrapper.state().isSending).toBeFalsy();
});

it(`Handle submit`, () => {
  const wrapper = shallow(<MockComponentWrapped id="1" />);

  const onSubmit = jest.fn();

  wrapper.instance().handleSubmit(onSubmit);

  expect(wrapper.state().isSending).toBeTruthy();
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

it(`Handle field change`, () => {
  const wrapper = shallow(<MockComponentWrapped id="1" />);

  const rating = `5`;

  wrapper.instance().handleFieldChange(`rating`, rating);
  expect(wrapper.state().rating).toEqual(rating);
});
