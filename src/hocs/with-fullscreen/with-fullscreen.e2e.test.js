import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFullscreen from "./with-fullscreen";
import PropTypes from "prop-types";

configure({adapter: new Adapter()});

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

it(`Default fullscreen state`, () => {
  const wrapper = shallow(<MockComponentWrapped><React.Fragment /></MockComponentWrapped>);

  expect(wrapper.state().isFullscreenEnabled).toEqual(false);
});

it(`Change fullscreen state`, () => {
  const wrapper = shallow(<MockComponentWrapped><React.Fragment /></MockComponentWrapped>);
  wrapper.instance().handleFullscreen(true);
  expect(wrapper.state().isFullscreenEnabled).toEqual(true);
});
