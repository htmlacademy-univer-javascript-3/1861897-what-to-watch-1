import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../store/action';
import { Footer, Logo } from '../../components';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import processErrorHandle from '../../services/process-error-handle';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

const SignIn = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      if (/((?:[0-9][a-zA-Z\s])|(?:[a-zA-Z\s][0-9]))/.test(passwordRef.current.value)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        dispatch(login({password: passwordRef.current.value, email: emailRef.current.value}));
      } else {
        processErrorHandle('Пароль должен содержать хотя бы одну букву и цифру');
      }
    }
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (<Navigate to={AppRoute.MainPage} />);
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" required ref={emailRef} type="email" placeholder="Email address" name="user-email" id="user-email" data-testid="email-input" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" required ref={passwordRef} type="password" placeholder="Password" name="user-password" id="user-password" data-testid="password-input" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
