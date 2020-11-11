import React, {PureComponent, Fragment} from "react";
import {calculateTimeData, calculatePlayingPosition, calculateElapsedData} from "../../player";
import MovieTypes from "../../types/movies";
import PropTypes from "prop-types";
import PlayerPlayingControls from "../../components/player-playing-controls/player-playing-controls";

const withPlayerControls = (Component) => {
  class WithPlayerControls extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isLoading: true,
        duration: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        elapsed: {
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        playingPosition: 0,
        video: null,
      };

      this.handleEnded = this.handleEnded.bind(this);
      this.initVideo = this.initVideo.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
      this.handleClickOnPlayingControls = this.handleClickOnPlayingControls.bind(this);
    }

    handleClickOnPlayingControls() {
      this.setState((state) => ({
        isPlaying: !state.isPlaying,
      }));
    }

    initVideo(player) {
      const videoDuration = player.duration;
      const duration = calculateTimeData(videoDuration);

      this.setState({
        isLoading: false,
        video: player,
        duration,
        elapsed: duration
      });
    }

    handleEnded() {
      this.setState((state) => ({
        playingPosition: 0,
        elapsed: state.duration,
        isPlaying: false
      }));
    }

    handleTimeUpdate() {
      const {video, duration} = this.state;
      const videoCurrentTime = video.currentTime;

      this.setState({
        elapsed: calculateElapsedData(duration, calculateTimeData(videoCurrentTime)),
        playingPosition: calculatePlayingPosition(video.currentTime, video.duration),
      });
    }

    renderControls() {
      const {isLoading, playingPosition, elapsed, isPlaying} = this.state;
      const {movie, onChangeFullscreen, onPlayerClose} = this.props;

      if (isLoading) {
        return null;
      }

      return <Fragment><div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playingPosition} max="100" />
            <div className="player__toggler" style={{left: playingPosition + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{elapsed.hours}:{elapsed.minutes}:{elapsed.seconds}</div>
        </div>
        <div className="player__controls-row">
          <PlayerPlayingControls isPlaying={isPlaying} handleOnClick={this.handleClickOnPlayingControls} />
          <div className="player__name">{movie.name}</div>
          <button type="button" className="player__full-screen" onClick={() => onChangeFullscreen(true)}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use href="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
      <button type="button" className="player__exit" onClick={onPlayerClose}>Exit</button>
      </Fragment>;
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <div className="player">
          <Component {...this.props}
            handleTimeUpdate={this.handleTimeUpdate}
            handleEnded={this.handleEnded}
            isPlaying={isPlaying}
            initVideo={this.initVideo}
          />
          {this.renderControls()}
        </div>
      );
    }
  }

  WithPlayerControls.propTypes = {
    movie: MovieTypes.item,
    onChangeFullscreen: PropTypes.func.isRequired,
    onPlayerClose: PropTypes.func.isRequired
  };

  return WithPlayerControls;
};

export default withPlayerControls;
