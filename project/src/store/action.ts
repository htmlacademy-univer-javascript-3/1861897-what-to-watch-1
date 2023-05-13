import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';

import { setError } from './error-process/error-process';

import FilmType from '../types/film-type';
import { AppDispatch, StateType } from '../types/state-type';
import UserType from '../types/user-type';
import AuthorizationData from '../types/authorization-data-type';
import ReviewType from '../types/review-type';

import { ApiRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';

export const redirectToRoute = createAction<AppRoute | string>('redirectToRoute');

export const loadFilms = createAsyncThunk<FilmType[] | undefined, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'loadFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType[]>(ApiRoute.Films);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const loadFilmById = createAsyncThunk<FilmType | undefined, number, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'loadFilmById',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType>(`${ApiRoute.Films}${String(filmId)}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const loadReviews = createAsyncThunk<ReviewType[] | undefined, number, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'loadReviews',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ReviewType[]>(`${ApiRoute.Reviews}${String(filmId)}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const addReview = createAsyncThunk<
  void,
  { filmId: number; comment: string; rating: number; setFormIsDisabled?: (formDisabled: boolean) => void },
  {
    dispatch: AppDispatch;
    state: StateType;
    extra: AxiosInstance;
  }>(
    'addReview',
    async ({filmId, comment, rating, setFormIsDisabled}, {dispatch, extra: api}) => {
      try {
        if (setFormIsDisabled) {
          setFormIsDisabled(true);
        }
        await api.post<ReviewType[]>(`${ApiRoute.Reviews}${filmId}`, {comment, rating});
        dispatch(redirectToRoute(`${ApiRoute.Films}${filmId}`));
      } finally {
        if (setFormIsDisabled) {
          setFormIsDisabled(false);
        }
      }
    }
    );

export const loadSimilarFilms = createAsyncThunk<FilmType[] | undefined, number, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'loadSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType[]>(`${ApiRoute.Films}${String(filmId)}${ApiRoute.Similar}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const loadPromoFilm = createAsyncThunk<FilmType | undefined, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'loadPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType>(ApiRoute.Promo);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const loadFavoriteFilms = createAsyncThunk<FilmType[] | undefined, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'loadFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType[]>(ApiRoute.Favorite);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const changeFavoriteStatusFilm = createAsyncThunk<FilmType, { filmId: number; status: boolean }, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'changeFavoriteStatusFilm',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<FilmType>(`${ApiRoute.Favorite}/${filmId}/${status ? 0 : 1}`);
    return data;
  }
);

export const checkAuthorizationStatus = createAsyncThunk<UserType, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'checkAuthorizationStatus',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserType>(ApiRoute.Login);
    return data;
  }
);

export const login = createAsyncThunk<UserType, AuthorizationData, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'login',
  async (authorizationData, {dispatch, extra: api}) => {
    const {data} = await api.post<UserType>(ApiRoute.Login, authorizationData);
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.MainPage));
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  }
);

export const clearError = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance;
}>('clearError', (_arg, {dispatch}) => {
  setTimeout(() => {
    dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});
