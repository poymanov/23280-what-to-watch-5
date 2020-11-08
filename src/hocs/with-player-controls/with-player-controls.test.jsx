import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withPlayerControls from "./with-player-controls";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withPlayerControls(MockComponent);

const noop = () => {};

const movie = {
  id: 1,
  name: `test`,
  posterImage: `test`,
  previewImage: `test`,
  backgroundImage: `test`,
  backgroundColor: `test`,
  videoLink: `test`,
  previewVideoLink: `test`,
  description: `test`,
  rating: 1,
  scoresCount: 1,
  director: `test`,
  starring: [`test`],
  runTime: 1,
  genre: `test`,
  released: 1,
  isFavorite: false,
};

it(`withPlayerControls is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped movie={movie} onChangeFullscreen={noop} onPlayerClose={noop}>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
