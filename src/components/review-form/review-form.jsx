import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {addReview} from "../../store/api-actions";
import PropTypes from "prop-types";
import {reviewFormErrorSelector} from "../../store/selectors";
import {flushReviewFormError} from "../../store/action";

class ReviewForm extends PureComponent {
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

  componentWillUnmount() {
    this.props.flushReviewFormError();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {id} = this.props;
    const {rating, text} = this.state;
    this.setState({isSending: true});
    this.props.onSubmit({id, rating, comment: text});
    this.setState({isSending: false});
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
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
    const {rating, formValid, isSending} = this.state;
    const {error} = this.props;

    return (
      <form className="add-review__form" onSubmit={this.handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this.handleFieldChange} checked={rating === `1`} disabled={isSending === true}/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this.handleFieldChange} checked={rating === `2`} disabled={isSending === true}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={this.handleFieldChange} checked={rating === `3`} disabled={isSending === true}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this.handleFieldChange} checked={rating === `4`} disabled={isSending === true}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={this.handleFieldChange} checked={rating === `5`} disabled={isSending === true}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div><p>{error}</p></div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="text" id="review-text" placeholder="Review text" onChange={this.handleFieldChange} disabled={isSending === true} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={formValid === false || isSending === true}>Post</button>
          </div>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  flushReviewFormError: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: reviewFormErrorSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(reviewData) {
    dispatch(addReview(reviewData));
  },
  flushReviewFormError() {
    dispatch(flushReviewFormError());
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
