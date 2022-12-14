import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initialState } from '../reducer';

import configureStore from 'client-utils/common/redux/configure-store';

import AnalyticsIndex from '../index';
import Analytics from '../Container';

jest.mock('next/router', () => ({ withRouter: component => component }));

describe('<Analytics />', () => {
  let store;
  const spy = jest.fn();

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render correctly - index', () => {
    const { container } = render(
      <Provider store={store}>
        <AnalyticsIndex />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Analytics
          sendAnalytic={spy}
          analyticState={{
            ...initialState,
          }}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
