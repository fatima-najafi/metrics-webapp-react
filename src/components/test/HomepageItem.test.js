import React from 'react';
import { render } from '@testing-library/react';
import HomepageItem from '../homepage/HomepageItem';

describe('HomepageItem', () => {
  test('renders correctly with the given title', () => {
    const title = 'Example Title';
    const { container } = render(<HomepageItem title={title} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
