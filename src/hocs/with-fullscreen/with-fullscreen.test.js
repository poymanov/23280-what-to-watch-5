import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withFullscreen from "./with-fullscreen";

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

const MockComponentWrapped = withFullscreen(MockComponent);

it(`withFullscreen is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
