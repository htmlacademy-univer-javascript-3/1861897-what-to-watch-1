import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReview } from '../../store/action';
import { getCurrentFilm } from '../../store/film-process/selectors';

import { AppRoute } from '../../const';

export const ReviewForm = () => {
  const [reviewData, setReviewData] = useState({rating: 0, text: '',});
  const [formIsDisabled, setFormIsDisabled] = useState(false);

  const dispatch = useAppDispatch();

  const film = useAppSelector(getCurrentFilm);

  if (!film) {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addReview({comment: reviewData.text, filmId: film.id, rating: reviewData.rating, setFormIsDisabled: setFormIsDisabled}));
  };

  const handleInputChange = (evt: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setReviewData({...reviewData, [name]: value});
  };

  return (
    <div className="add-review">
      <form className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10).keys()].reverse().map((rating) => (
              <Fragment key={rating}>
                <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} onChange={handleInputChange} data-testid={`rating${rating}`} disabled={formIsDisabled} />
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea required className="add-review__textarea" name="text" id="review-text" placeholder="Review text" value={reviewData.text} onChange={handleInputChange} disabled={formIsDisabled} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" data-testid="post-button" disabled={400 < reviewData.text.length || reviewData.text.length < 50 || formIsDisabled}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};
