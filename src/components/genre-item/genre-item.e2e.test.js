import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreItem from "./genre-item";

configure({adapter: new Adapter()});

const genre = {
  id: `all`,
  title: `All`
};

it(`Change genre`, () => {
  const handleGenreClick = jest.fn();

  const wrapper = mount(<GenreItem isActive={false} genre={genre} handleGenreClick={handleGenreClick} />);

  const genreLink = wrapper.find(`.catalog__genres-link`);
  genreLink.simulate(`click`);

  expect(handleGenreClick).toHaveBeenCalledTimes(1);
});
