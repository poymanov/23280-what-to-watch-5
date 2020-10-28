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

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentDidMount() {
    const {movie, initVideo} = this.props;
    const player = this.videoRef.current;

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
    const {handleTimeUpdate, handleEnded} = this.props;

    return (
      <video
        className="player__video"
        ref={this.videoRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
    );
  }
}

Player.propTypes = {
  movie: MovieTypes.item,
  isPlaying: PropTypes.bool.isRequired,
  initVideo: PropTypes.func.isRequired,
  handleTimeUpdate: PropTypes.func.isRequired,
  handleEnded: PropTypes.func.isRequired
};

export default Player;
