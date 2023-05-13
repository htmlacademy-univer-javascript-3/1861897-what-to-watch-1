import {configureMockStore} from '@jedmao/redux-mock-store';
import {getMockFilm, getMockFilms} from '../../utils/mocks';
import {AppRoute, AuthorizationStatus, DEFAULT_GENRE, NameSpace} from '../../const';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import { HistoryRouter } from '../history-route/history-route';
import { App } from './app';
import {render, screen} from '@testing-library/react';
import {StateType} from '../../types/state-type';
import {Action} from '@reduxjs/toolkit';
import {ThunkDispatch} from 'redux-thunk';
import { createApi } from '../../services/api';
import thunk from 'redux-thunk';

jest.mock('../../services/process-error-handle.ts');

const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  StateType,
  Action,
  ThunkDispatch<StateType, typeof api, Action>
>(middlewares);
const mockFilms = getMockFilms();
const mockFilm = getMockFilm();

let store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
    user: undefined,
    isAuthorizationInProgress: false,
  },
  [NameSpace.Error]: {
    error: null,
  },
  [NameSpace.Film]: {
    currentFilm: mockFilm,
    isFilmLoading: false,
    isReviewsLoading: false,
    isSimilarFilmsLoading: false,
    reviews: [],
    similarFilms: [],
    promoFilm: mockFilm,
  },
  [NameSpace.Films]: {
    currentGenre: DEFAULT_GENRE,
    favoriteFilms: mockFilms,
    films: [],
    isFilmsLoading: false,
    isFavoriteFilmsLoading: false,
  },
});

const history = createMemoryHistory();

let fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App/>
    </HistoryRouter>
  </Provider>
);

describe('Application routing', () => {
  beforeEach(() => {
    store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: undefined,
        isAuthorizationInProgress: false,
      },
      [NameSpace.Error]: {
        error: null,
      },
      [NameSpace.Film]: {
        currentFilm: mockFilm,
        isFilmLoading: false,
        isReviewsLoading: false,
        isSimilarFilmsLoading: false,
        reviews: [],
        similarFilms: [],
        promoFilm: mockFilm,
      },
      [NameSpace.Films]: {
        currentGenre: DEFAULT_GENRE,
        favoriteFilms: mockFilms,
        films: [],
        isFilmsLoading: false,
        isFavoriteFilmsLoading: false,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App/>
        </HistoryRouter>
      </Provider>
    );
  });

  it('should render main page, when user navigates to AppRoute.MainPage', () => {
    history.push(AppRoute.MainPage);
    render(fakeApp);

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByText(DEFAULT_GENRE)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });

  it('should render SignIn, when user navigates to AppRoute.SignIn', () => {
    store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: undefined,
        isAuthorizationInProgress: false,
      },
      [NameSpace.Error]: {
        error: null,
      },
      [NameSpace.Film]: {
        currentFilm: mockFilm,
        isFilmLoading: false,
        isReviewsLoading: false,
        isSimilarFilmsLoading: false,
        reviews: [],
        similarFilms: [],
        promoFilm: mockFilm,
      },
      [NameSpace.Films]: {
        currentGenre: DEFAULT_GENRE,
        favoriteFilms: mockFilms,
        films: [],
        isFilmsLoading: false,
        isFavoriteFilmsLoading: false,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App/>
        </HistoryRouter>
      </Provider>
    );

    history.push(AppRoute.SignIn);
    render(fakeApp);

    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  });

  it('should render Player, when user navigates to AppRoute.Player', () => {
    history.push('/player/1');
    render(fakeApp);

    expect(screen.getByText('Transpotting')).toBeInTheDocument();
    expect(screen.getByText('Exit')).toBeInTheDocument();
  });

  it('should render MyList, when user navigates to AppRoute.MyList', () => {
    history.push(AppRoute.MyList);
    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(mockFilms[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockFilms[1].name)).toBeInTheDocument();
  });

  it('should render AddReview, when user navigates to AppRoute.AddReview', () => {
    history.push('/films/1/review');
    render(fakeApp);

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });

  it('should render Film, when user navigates to AppRoute.Film', () => {
    history.push('/films/1');
    render(fakeApp);

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });
});
