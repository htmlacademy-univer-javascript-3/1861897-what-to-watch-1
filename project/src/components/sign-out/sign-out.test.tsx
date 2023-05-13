import { getMockUser } from '../../utils/mocks';
import { createApi } from '../../services/api';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { StateType } from '../../types/state-type';
import { Action } from '@reduxjs/toolkit';
import { AppRoute, NameSpace } from '../../const';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { logout } from '../../store/action';
import { SignOut } from './sign-out';

jest.mock('../../services/process-error-handle.ts');
const mockUser = getMockUser();
const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  StateType,
  Action
>(middlewares);
const store = mockStore({
  [NameSpace.User]: {
    user: mockUser,
  }
});

describe('SignOut', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignOut />
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should dispatch logout, when click by button', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'*'} element={<SignOut />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    await userEvent.click(screen.getByRole('button'));

    // eslint-disable-next-line  @typescript-eslint/no-unsafe-return
    expect(store.getActions().map(({type}) => type)).toEqual([
      logout.pending.type,
    ]);
  });

  it('should redirect to AppRoute.MyList, when click by link', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.MyList} element={<p>MyList</p>} />
            <Route path={'*'} element={<SignOut/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/MyList/i)).toBeInTheDocument();
  });
});
