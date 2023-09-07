import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../redux/store';
import Detailspage from '../details/Detailspage';

it('renders the Detailspage component', () => {
  render(
    <Provider store={store}>
      <Detailspage />
    </Provider>,
  );
  const detailsPage = screen.getByTestId('detailspage');
  expect(detailsPage).toBeInTheDocument();
  const companyName = screen.getByText('Sector');
  expect(companyName).toBeInTheDocument();
});
