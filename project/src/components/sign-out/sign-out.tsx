import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/action';
import { getUser } from '../../store/user-process/selectors';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export const SignOut = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const avatarImage = user?.avatarUrl;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          {/*eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call*/}
          <Link to={AppRoute.MyList}>
            <img src={avatarImage} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        {/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
        <button style={{border: 'none', background: 'transparent'}} onClick={async () => await dispatch(logout())} className="user-block__link">Sign out</button>
      </li>
    </ul>
  );
};
