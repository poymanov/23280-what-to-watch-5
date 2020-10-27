import React, {PureComponent, Fragment} from "react";
import {calculateTimeData, calculatePlayingPosition, calculateElapsedData} from "../player";
import MovieTypes from "../types/movies";
import PropTypes from "prop-types";

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

      this.handlePlay = this.handlePlay.bind(this);
      this.handlePause = this.handlePause.bind(this);
      this.handleEnded = this.handleEnded.bind(this);
      this.getIsPlaying = this.getIsPlaying.bind(this);
      this.initVideo = this.initVideo.bind(this);
      this.renderPlayingControls = this.renderPlayingControls.bind(this);
      this.renderElapsedTime = this.renderElapsedTime.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    handlePlay() {
      this.setState({isPlaying: true});
    }

    handlePause() {
      this.setState({isPlaying: false});
    }

    getIsPlaying() {
      return this.state.isPlaying;
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
      const video = this.state.video;
      const videoCurrentTime = video.currentTime;

      this.setState({
        elapsed: calculateElapsedData(this.state.duration, calculateTimeData(videoCurrentTime)),
        playingPosition: calculatePlayingPosition(video.currentTime, video.duration),
      });
    }

    renderElapsedTime() {
      const elapsed = this.state.elapsed;

      return <div className="player__time-value">{elapsed.hours}:{elapsed.minutes}:{elapsed.seconds}</div>;
    }

    renderPlayingControls() {
      if (this.state.isPlaying) {
        return <button type="button" className="player__play" onClick={this.handlePause}>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use href="#pause" />
          </svg>
          <span>Pause</span>
        </button>;
      } else {
        return <button type="button" className="player__play" onClick={this.handlePlay}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use href="#play-s" />
          </svg>
          <span>Play</span>
        </button>;
      }
    }

    renderControls() {
      const {isLoading, playingPosition} = this.state;
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
          {this.renderElapsedTime()}
        </div>
        <div className="player__controls-row">
          {this.renderPlayingControls()}
          <div className="player__name">{movie.title}</div>
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
