import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMoreMovies} from "./show-more-movies";

configure({adapter: new Adapter()});

it(`Click show more movies button`, () => {
  const showMore = jest.fn();

  const wrapper = shallow(<ShowMoreMovies nextItemId={1} currentGenreId={`All`} showMore={showMore}/>);

  const showMoreButton = wrapper.find(`button.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(showMore).toHaveBeenCalledTimes(1);
});
