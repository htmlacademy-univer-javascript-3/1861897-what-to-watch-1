import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from '../history-route/history-route';
import { AppRoute } from '../../const';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { SignIn } from './sign-in';

const history = createMemoryHistory();
history.push('/signIn');

describe('SignIn', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should redirect to AppRoute.SignIn, when click by Link', async () => {
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path={'/signIn'} element={<SignIn />} />
          <Route path={AppRoute.SignIn} element={<p>SignIn</p>} />
        </Routes>
      </HistoryRouter>
    );

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/SignIn/i)).toBeInTheDocument();
  });
});
