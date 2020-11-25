import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab";
import {TabsData} from "../../etc/tabs.data";

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
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Default active tab`, () => {
  const wrapper = shallow(<MockComponentWrapped movie={movie}/>);

  expect(wrapper.state().activeTab).toEqual(TabsData.OVERVIEW);
});

it(`Set active movie id`, () => {
  const wrapper = shallow(<MockComponentWrapped movie={movie}/>);
  wrapper.instance().handleClickTab(TabsData.DETAILS);
  expect(wrapper.state().activeTab).toEqual(TabsData.DETAILS);
});
