import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreMovies from "./show-more-movies";

configure({adapter: new Adapter()});

it(`Click show more movies button`, () => {
  const handleShowMore = jest.fn();

  const wrapper = shallow(<ShowMoreMovies handleShowMore={handleShowMore}/>);

  const showMoreButton = wrapper.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(handleShowMore).toHaveBeenCalledTimes(1);
});
