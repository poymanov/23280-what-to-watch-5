import React from "react";
import {configure, shallow} from "enzyme";
import withPagination from "./with-pagination";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

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

const MockComponent = () => {
  return (<div />);
};

const MockComponentWrapped = withPagination(MockComponent);

it(`Default pagination state`, () => {
  const wrapper = shallow(<MockComponentWrapped movies={[movie]}><React.Fragment /></MockComponentWrapped>);

  expect(wrapper.state().lastPosition).toEqual(8);
});

it(`Change pagination state`, () => {
  const wrapper = shallow(<MockComponentWrapped movies={[movie]}><React.Fragment /></MockComponentWrapped>);
  wrapper.instance().handleShowMore(true);
  expect(wrapper.state().lastPosition).toEqual(16);
});
