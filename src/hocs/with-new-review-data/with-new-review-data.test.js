import React from "react";
import renderer from "react-test-renderer";
import withNewReviewData from "./with-new-review-data";


const MockComponent = () => {
  return (
    <div />
  );
};

const MockComponentWrapped = withNewReviewData(MockComponent);

it(`withNewReviewData is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped id="1">
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
