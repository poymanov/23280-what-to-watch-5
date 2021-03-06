import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreItem from "./genre-item";
import browserHistory from "../../etc/browser-history";
import {Router as BrowserRouter} from "react-router-dom";

configure({adapter: new Adapter()});

const genre = {
  id: `all`,
  title: `All`
};

it(`Change genre`, () => {
  const onGenreClick = jest.fn();

  const wrapper = mount(
      <BrowserRouter history={browserHistory}>
        <GenreItem isActive={false} genre={genre} onGenreClick={onGenreClick} />
      </BrowserRouter>
  );

  const genreLink = wrapper.find(`a.catalog__genres-link`);
  genreLink.simulate(`click`);

  expect(onGenreClick).toHaveBeenCalledTimes(1);
});
