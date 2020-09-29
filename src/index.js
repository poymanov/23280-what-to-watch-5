import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  promoMovie: {
    title: `The Grand Budapest Hotel`, genre: `Drama`, year: 2014, poster: `img/the-grand-budapest-hotel-poster.jpg`, preview: `img/bg-the-grand-budapest-hotel.jpg`
  },
  genres: [
    {id: 1, title: `Comedies`},
    {id: 2, title: `Crime`},
    {id: 3, title: `Documentary`},
    {id: 4, title: `Dramas`},
    {id: 5, title: `Horror`},
    {id: 6, title: `Kids & Family`},
    {id: 7, title: `Romance`},
    {id: 8, title: `Sci-Fi`},
    {id: 9, title: `Thrillers`},
  ],
  movies: [
    {id: 1, title: `Fantastic Beasts: The Crimes of Grindelwald`, image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`},
    {id: 2, title: `Bohemian Rhapsody`, image: `img/bohemian-rhapsody.jpg`},
    {id: 3, title: `Macbeth`, image: `img/macbeth.jpg`},
    {id: 4, title: `Aviator`, image: `img/aviator.jpg`},
    {id: 5, title: `We need to talk about Kevin`, image: `img/we-need-to-talk-about-kevin.jpg`},
    {id: 6, title: `What We Do in the Shadows`, image: `img/what-we-do-in-the-shadows.jpg`},
    {id: 7, title: `Revenant`, image: `img/revenant.jpg`},
    {id: 8, title: `Johnny English`, image: `img/johnny-english.jpg`},
    {id: 9, title: `Shutter Island`, image: `img/shutter-island.jpg`},
    {id: 10, title: `Pulp Fiction`, image: `img/pulp-fiction.jpg`},
    {id: 11, title: `No Country for Old Men`, image: `img/no-country-for-old-men.jpg`},
    {id: 12, title: `Snatch`, image: `img/snatch.jpg`},
    {id: 13, title: `Moonrise Kingdom`, image: `img/moonrise-kingdom.jpg`},
    {id: 14, title: `Seven Years in Tibet`, image: `img/seven-years-in-tibet.jpg`},
    {id: 15, title: `Midnight Special`, image: `img/midnight-special.jpg`},
    {id: 16, title: `War of the Worlds`, image: `img/war-of-the-worlds.jpg`},
    {id: 17, title: `Dardjeeling Limited`, image: `img/dardjeeling-limited.jpg`},
    {id: 18, title: `Orlando`, image: `img/orlando.jpg`},
    {id: 19, title: `Mindhunter`, image: `img/mindhunter.jpg`},
    {id: 20, title: `Midnight Special`, image: `img/midnight-special.jpg`},
  ],
};

ReactDOM.render(
    <App promoMovie={Settings.promoMovie} genres={Settings.genres} movies={Settings.movies} />,
    document.querySelector(`#root`)
);
