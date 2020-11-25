import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";

const noop = () => {};

it(`Should ReviewForm render correctly`, () => {
  const tree = renderer
    .create(<ReviewForm
      flushReviewFormError={noop}
      id={`1`}
      onSubmit={noop}
      addNewReview={noop}
      onFieldChange={noop}
      formValid={false}
      isSending={false}
      rating="3"
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
