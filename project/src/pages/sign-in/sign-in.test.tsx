import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import SignIn from './sign-in';
import userEvent from '@testing-library/user-event';
import { AuthorizationStatus, NameSpace } from '../../const';

describe('SignIn', () => {
  const mockStore = configureMockStore();
  it('should render correctly', async () => {
    render(
      <Provider store={mockStore({[NameSpace.User]: {authorizationStatus: AuthorizationStatus.NoAuth}})}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('password-input'), '123Test');
    await userEvent.type(screen.getByTestId('email-input'), 'test@test.ru');

    expect(screen.getByDisplayValue('123Test')).toBeInTheDocument();
    expect(screen.getByDisplayValue('test@test.ru')).toBeInTheDocument();
  });
});
