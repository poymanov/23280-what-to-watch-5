import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

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

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Default active movie id`, () => {
  const wrapper = shallow(<MockComponentWrapped movie={movie}/>);

  expect(wrapper.state().activeMovieId).toEqual(-1);
});

it(`Set active movie id`, () => {
  const wrapper = shallow(<MockComponentWrapped movie={movie}/>);
  wrapper.instance().handleActiveMovie(1);
  expect(wrapper.state().activeMovieId).toEqual(1);
});
