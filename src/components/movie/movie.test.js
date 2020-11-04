import React from "react";
import renderer from "react-test-renderer";
import {Movie} from "./movie";

const noop = () => {};

describe(`Should Movie render correctly`, () => {
  it(`Without movie`, () => {
    const tree = renderer
      .create(
          <Movie
            id={`1`}
            authorizationStatus={``}
            fetchCurrentMovie={noop}
            flushCurrentMovie={noop}
            onPlayButtonClick={noop} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


