import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { getFilms, getGenre } from '../../store/films-process/selectors';
import { changeGenre } from '../../store/films-process/films-process';

import { ALL_GENRES } from '../../const';

type GenresListProps = {
  buttonClickHandler: () => void;
}

export const GenresList = (props: GenresListProps): JSX.Element => {
  const currentGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);

  const genres = [ALL_GENRES, ...Array.from(new Set([ ...films.map((film) => film.genre)].sort()))].slice(0, 10);
  const dispatch = useAppDispatch();

  const handleGenreChange = (event: React.MouseEvent<HTMLButtonElement>, genre: string) => {
    event.preventDefault();
    dispatch(changeGenre(genre));
    props.buttonClickHandler();
  };

  return (
    <ul className='catalog__genres-list'>
      {genres.map((genre) => (
        <li key={genre} data-testid='genre' className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}>
          <button style={{border: 'none', background: 'transparent'}} className='catalog__genres-link' onClick={(event) => handleGenreChange(event, genre)}>{genre}</button>
        </li>
      ))}
    </ul>
  );
};
