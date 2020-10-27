import React, {PureComponent} from "react";
import Fullscreen from 'react-fullscreen-crossbrowser';

const withFullscreen = (Component) => {
  class WithFullscreen extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFullscreenEnabled: false,
      };

      this.handleFullscreen = this.handleFullscreen.bind(this);
    }

    handleFullscreen(status) {
      this.setState({isFullscreenEnabled: status});
    }

    render() {
      const {isFullscreenEnabled} = this.state;

      return (
        <Fullscreen
          enabled={isFullscreenEnabled}
          onChange={(status) => this.handleFullscreen(status)}
        >
          <Component {...this.props} onChangeFullscreen={this.handleFullscreen}/>
        </Fullscreen>
      );
    }
  }

  return WithFullscreen;
};

export default withFullscreen;
