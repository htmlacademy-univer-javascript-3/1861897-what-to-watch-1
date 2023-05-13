import { getMockFilm } from '../../utils/mocks';
import { createApi } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { StateType } from '../../types/state-type';
import { Action } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { addReview } from '../../store/action';
import { ReviewForm } from './review-form';

jest.mock('../../services/process-error-handle.ts');
const mockFilm = getMockFilm();
const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  StateType,
  Action,
  ThunkDispatch<StateType, typeof api, Action>
>(middlewares);

describe('ReviewForm', () => {
  const store = mockStore({
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Auth,
    },
    [NameSpace.Film]: {
      currentFilm: mockFilm,
    }
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ReviewForm />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should not dispatch AddReview, when click by postButton and there is no comment data', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ReviewForm />
        </BrowserRouter>
      </Provider>
    );

    await userEvent.click(screen.getByTestId('post-button'));

    // eslint-disable-next-line  @typescript-eslint/no-unsafe-return
    expect(store.getActions().map(({type}) => type)).toEqual([]);
  });

  it('should dispatch AddReview, when click by postButton', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ReviewForm />
        </BrowserRouter>
      </Provider>
    );

    await userEvent.click(screen.getByTestId('rating2'));
    await userEvent.type(screen.getByRole('textbox'),
      'text text text text text text text text text text text text text text text text text text');

    await userEvent.click(screen.getByTestId('post-button'));

    // eslint-disable-next-line  @typescript-eslint/no-unsafe-return
    expect(store.getActions().map(({type}) => type)).toEqual([
      addReview.pending.type,
    ]);
  });
});
