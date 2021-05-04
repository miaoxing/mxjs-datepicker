import React from 'react';
import {render} from '@testing-library/react';
import DatePicker from '..';

describe('DatePicker', () => {
  test('basic', () => {
    const result = render(<DatePicker/>);
    expect(result.container).toMatchSnapshot();
  });
});

