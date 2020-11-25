import React, {Fragment} from "react";
import PropTypes from "prop-types";

const PlayerPlayingControls = (props) => {
  const {isPlaying, onClick} = props;

  let controlsLabel = null;

  if (isPlaying) {
    controlsLabel = <Fragment>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use href="#pause" />
      </svg>
      <span>Pause</span>
    </Fragment>;
  } else {
    controlsLabel = <Fragment>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use href="#play-s" />
      </svg>
      <span>Play</span>
    </Fragment>;
  }

  return (
    <button type="button" className="player__play" onClick={onClick}>{controlsLabel}</button>
  );
};

PlayerPlayingControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PlayerPlayingControls;
