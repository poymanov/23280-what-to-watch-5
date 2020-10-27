import React from "react";
import MovieTypes from "../../types/movies";

const PreviewPlayer = (props) => {
  const {movie} = props;
  return (
    <video src={movie.trailer} width="336" height="175" autoPlay muted poster={movie.image} />
  );
};

PreviewPlayer.propTypes = {
  movie: MovieTypes.oldItem,
};

export default PreviewPlayer;
