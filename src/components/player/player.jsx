import React, {PureComponent, createRef} from "react";
import MovieTypes from "../../types/movies";
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = createRef();
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (!video) {
      return;
    }

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentDidMount() {
    const {movie, initVideo} = this.props;
    const player = this.videoRef.current;

    if (!player) {
      return;
    }

    player.src = movie.videoLink;
    player.poster = movie.previewImage;

    player.oncanplaythrough = () => {
      initVideo(player);
    };
  }

  componentWillUnmount() {
    const player = this.videoRef.current;

    player.oncanplaythrough = null;
  }

  render() {
    const {onTimeUpdate, onEnded} = this.props;

    return (
      <video
        className="player__video"
        ref={this.videoRef}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
    );
  }
}

Player.propTypes = {
  movie: MovieTypes.item,
  isPlaying: PropTypes.bool.isRequired,
  initVideo: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onEnded: PropTypes.func.isRequired
};

export default Player;
