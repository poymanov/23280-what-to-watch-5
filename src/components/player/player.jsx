import React, {PureComponent, createRef} from "react";
import MovieTypes from "../../types/movies";
import PropTypes from "prop-types";
import Fullscreen from 'react-fullscreen-crossbrowser';
import {calculateTimeData, calculatePlayingPosition, calculateElapsedData} from "../../player";

class Player extends PureComponent {
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
      isFullscreenEnabled: false,
    };

    this.videoRef = createRef();

    this.handlePlay = this.handlePlay.bind(this);
    this.renderPlayingControls = this.renderPlayingControls.bind(this);
    this.renderElapsedTime = this.renderElapsedTime.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.renderPlayerControls = this.renderPlayerControls.bind(this);
    this.handleFullscreen = this.handleFullscreen.bind(this);
  }

  handlePlay() {
    this.setState({isPlaying: true});
  }

  handlePause() {
    this.setState({isPlaying: false});
  }

  handleFullscreen(status) {
    this.setState({isFullscreenEnabled: status});
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentDidMount() {
    const {movie} = this.props;
    const player = this.videoRef.current;

    player.src = movie.trailer;
    player.poster = movie.poster;

    player.oncanplaythrough = () => {
      const videoDuration = player.duration;
      const duration = calculateTimeData(videoDuration);

      this.setState({
        isLoading: false,
        duration,
        elapsed: duration,
      });
    };
  }

  componentWillUnmount() {
    const player = this.videoRef.current;

    player.oncanplaythrough = null;
  }

  renderPlayingControls() {
    if (this.state.isPlaying) {
      return <button type="button" className="player__play" onClick={() => this.handlePause()}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use href="#pause" />
        </svg>
        <span>Pause</span>
      </button>;
    } else {
      return <button type="button" className="player__play" onClick={() => this.handlePlay()}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use href="#play-s" />
        </svg>
        <span>Play</span>
      </button>;
    }
  }

  handleTimeUpdate() {
    const video = this.videoRef.current;
    const videoCurrentTime = video.currentTime;

    this.setState({
      elapsed: calculateElapsedData(this.state.duration, calculateTimeData(videoCurrentTime)),
      playingPosition: calculatePlayingPosition(video.currentTime, video.duration),
    });
  }

  renderPlayerControls() {
    if (this.state.isLoading) {
      return null;
    }

    const {movie} = this.props;
    const playingPosition = this.state.playingPosition;

    return <div className="player__controls">
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
        <button type="button" className="player__full-screen" onClick={() => this.setState({isFullscreenEnabled: true})}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use href="#full-screen" />
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>;
  }

  renderElapsedTime() {
    const elapsed = this.state.elapsed;

    return <div className="player__time-value">{elapsed.hours}:{elapsed.minutes}:{elapsed.seconds}</div>;
  }

  render() {
    const {onPlayerClose} = this.props;
    const isFullscreenEnabled = this.state.isFullscreenEnabled;

    return (
      <Fullscreen
        enabled={isFullscreenEnabled}
        onChange={(status) => this.handleFullscreen(status)}
      >
        <div className="player">
          <video
            className="player__video"
            ref={this.videoRef}
            onTimeUpdate={() => this.handleTimeUpdate()}
          />

          <button type="button" className="player__exit" onClick={() => onPlayerClose()}>Exit</button>
          {this.renderPlayerControls()}
        </div>
      </Fullscreen>
    );
  }
}

Player.propTypes = {
  movie: MovieTypes.item,
  onPlayerClose: PropTypes.func.isRequired
};

export default Player;
