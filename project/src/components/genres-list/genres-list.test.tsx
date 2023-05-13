import { getMockExtendedFilms } from '../../utils/mocks';
import { createApi } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { StateType } from '../../types/state-type';
import { Action } from '@reduxjs/toolkit';
import { ALL_GENRES, NameSpace } from '../../const';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GenresList } from './genres-list';

jest.mock('../../services/process-error-handle.ts');
describe('GenresList', () => {
  const mockExtendedFilms = getMockExtendedFilms();
  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    StateType,
    Action,
    ThunkDispatch<StateType, typeof api, Action>
  >(middlewares);
  const store = mockStore({
    [NameSpace.Films]: {
      films: mockExtendedFilms,
      currentGenre: ALL_GENRES,
    }
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GenresList buttonClickHandler={() => ({})} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument();
    expect(screen.getByText(mockExtendedFilms[0].genre)).toBeInTheDocument();
    expect(screen.getByText(mockExtendedFilms[1].genre)).toBeInTheDocument();
  });

  it('should no more 10 genres', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GenresList buttonClickHandler={() => ({})} />
        </BrowserRouter>
      </Provider>
    );

    const genres = screen.getAllByTestId('genre');

    expect(genres.length).toBe(10);
  });
});
