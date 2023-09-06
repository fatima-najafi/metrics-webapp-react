import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../redux/store';
import Detailspage from '../details/Detailspage';

it('Check any changes to the component', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Detailspage />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <Detailspage />
    </Provider>,
  );

  const details = screen.getByTestId('detailspage');

  expect(details).toBeInTheDocument();
});
