import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import HomepageList from '../homepage/HomepageList';

describe('HomepageList', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomepageList />
        </BrowserRouter>
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
