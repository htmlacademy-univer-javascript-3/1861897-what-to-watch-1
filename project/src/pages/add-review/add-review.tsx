import { Link, useParams } from 'react-router-dom';
import { Logo, ReviewForm, SignIn, SignOut, Spinner } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { getCurrentFilm, getIsFilmLoading } from '../../store/film-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

import { AuthorizationStatus } from '../../const';
import NotFound from '../not-found/not-found';
import { loadFilmById } from '../../store/action';
import { useEffect } from 'react';

const AddReview = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(loadFilmById(id));
  }, [id, dispatch]);


  const film = useAppSelector(getCurrentFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFilmLoading = useAppSelector(getIsFilmLoading);

  if (isFilmLoading) {
    return <Spinner />;
  }

  if (!film) {
    return (<NotFound />);
  }

  return (
    <section style={{'background': `${film.backgroundColor}`}} className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <button style={{border: 'none', background: 'transparent'}} className="breadcrumbs__link">Add review</button>
              </li>
            </ul>
          </nav>
          {authorizationStatus === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />}
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
};

export default AddReview;
