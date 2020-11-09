import React from "react";
import renderer from "react-test-renderer";
import MovieReview from "./movie-review";

const review = {
  id: 1,
  comment: `test`,
  date: `2020-12-20 12:12:12`,
  rating: 5,
  user: {
    id: 1,
    name: `test`,
  }
};

it(`Should MovieReview render correctly`, () => {
  const tree = renderer
    .create(<MovieReview review={review}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
