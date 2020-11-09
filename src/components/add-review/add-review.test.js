import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";

const noop = () => {};

describe(`Should AddReview render correctly`, () => {
  it(`Without movie`, () => {
    const tree = renderer
      .create(<AddReview id={`1`} fetchCurrentMovie={noop} flushCurrentMovie={noop}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
