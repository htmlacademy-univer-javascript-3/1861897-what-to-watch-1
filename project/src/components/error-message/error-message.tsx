import {useAppSelector} from '../../hooks';

import { getError } from '../../store/error-process/selectors';

import './error-message.css';

export const ErrorMessage = (): JSX.Element | null => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  const error = useAppSelector(getError);

  return (error
    ? <div className='error-message'>{error}</div>
    : null);
};
