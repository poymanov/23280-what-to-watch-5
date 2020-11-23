import React from "react";
import MovieTypes from "../../types/movies";

const PreviewPlayer = ({movie}) => {
  return (
    <video src={movie.previewVideoLink} width="280" height="175" autoPlay muted poster={movie.previewImage} />
  );
};

PreviewPlayer.propTypes = {
  movie: MovieTypes.item,
};

export default PreviewPlayer;
