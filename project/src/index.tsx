import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App, ErrorMessage, HistoryRouter } from './components';
import { store } from './store';
import { checkAuthorizationStatus, loadFilms, loadPromoFilm } from './store/action';
import browserHistory from './services/browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(loadFilms());
store.dispatch(loadPromoFilm());
store.dispatch(checkAuthorizationStatus());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
