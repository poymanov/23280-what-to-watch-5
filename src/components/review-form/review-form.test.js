import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";

const noop = () => {};

it(`Should ReviewForm render correctly`, () => {
  const tree = renderer
    .create(<ReviewForm id={`1`} onSubmit={noop}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
