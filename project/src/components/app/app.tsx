import { Route, Routes } from 'react-router-dom';

import { getIsFilmsLoading } from '../../store/films-process/selectors';

import { PrivateRoute } from '../private-route/private-route';
import { AddReview, Film, MainPage, MyList, NotFound, Player, SignIn } from '../../pages';
import { Spinner } from '../spinner/spinner';

import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';


export const App = (): JSX.Element => {
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);


  if (isFilmsLoading) {
    return (<Spinner />);
  }

  return (
    <>
      {isFilmsLoading && <Spinner />}
      <Routes>
        <Route
          path={AppRoute.MainPage}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};
