import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShowMoreButton } from './show-more-button';

describe('ShowMoreButton', () => {
  it('should render correctly', () => {
    render(<ShowMoreButton buttonClickHandler={() => ({})}/>);
    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });

  it('should call handler, when click button', async () => {
    const mockHandler = jest.fn();
    render(<ShowMoreButton buttonClickHandler={mockHandler}/>);

    await userEvent.click(screen.getByRole('button'));
    expect(mockHandler).toBeCalled();
  });
});
