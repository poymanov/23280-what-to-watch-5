import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withNewReviewData = (Component) => {
  class WithNewReviewData extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `3`,
        text: ``,
        formValid: false,
        isSending: false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(onSubmit) {
      const {id} = this.props;
      const {rating, text} = this.state;
      this.setState({isSending: true});
      onSubmit({id, rating, comment: text});
    }

    handleFieldChange(name, value) {
      this.setState({[name]: value});

      if (name === `text`) {
        if (value.length >= 50 && value.length <= 400) {
          this.setState({formValid: true});
        } else {
          this.setState({formValid: false});
        }
      }
    }

    render() {
      const {id} = this.props;
      const {rating, text, formValid, isSending} = this.state;

      return (
        <Component id={id}
          onSubmit={this.handleSubmit}
          onFieldChange={this.handleFieldChange}
          rating={rating}
          text={text}
          formValid={formValid}
          isSending={isSending}
        />
      );
    }
  }

  WithNewReviewData.propTypes = {
    id: PropTypes.string.isRequired
  };

  return WithNewReviewData;
};

export default withNewReviewData;
