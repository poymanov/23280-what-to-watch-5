import React from "react";
import MovieTypes from "../../types/movies";
import moment from 'moment';

const MovieReview = (props) => {
  const {review} = props;

  function formatDate(date) {
    return moment(date).format(`MMMM D, YYYY`);
  }

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{formatDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

MovieReview.propTypes = {
  review: MovieTypes.reviewItem
};

export default MovieReview;
