/**
 * Test injectors
 */

import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import configureStore from '../configure-store';
import injectReducer, { useInjectReducer } from '../inject-reducer';
import * as reducerInjectors from '../reducer-injectors';

// Fixtures
const Component = () => null;

const reducer = s => s;

describe('injectReducer decorator', () => {
  let store;
  let injectors;
  let ComponentWithReducer;

  beforeAll(() => {
    // eslint-disable-next-line no-import-assign
    reducerInjectors.default = jest.fn().mockImplementation(() => injectors);
  });

  beforeEach(() => {
    store = configureStore({});
    injectors = {
      injectReducer: jest.fn(),
    };
    ComponentWithReducer = injectReducer({ key: 'test', reducer })(Component);
    reducerInjectors.default.mockClear();
  });

  it('should inject a given reducer', () => {
    renderer.create(
      <Provider store={store}>
        <ComponentWithReducer />
      </Provider>
    );

    expect(injectors.injectReducer).toHaveBeenCalledTimes(1);
    expect(injectors.injectReducer).toHaveBeenCalledWith('test', reducer);
  });

  it('should set a correct display name', () => {
    expect(ComponentWithReducer.displayName).toBe('withReducer(Component)');
    expect(injectReducer({ key: 'test', reducer })(() => null).displayName).toBe('withReducer(Component)');
  });

  it.skip('should propagate props', () => {
    const props = { testProp: 'test' };
    const renderedComponent = renderer.create(
      <Provider store={store}>
        <ComponentWithReducer {...props} />
      </Provider>
    );
    const {
      props: { children },
    } = renderedComponent.getInstance();

    expect(children.props).toEqual(props);
  });
});

describe('useInjectReducer hook', () => {
  let store;
  let injectors;
  let ComponentWithReducer;

  beforeAll(() => {
    injectors = {
      injectReducer: jest.fn(),
    };
    // eslint-disable-next-line no-import-assign
    reducerInjectors.default = jest.fn().mockImplementation(() => injectors);
    store = configureStore({});
    // eslint-disable-next-line react/display-name
    ComponentWithReducer = () => {
      useInjectReducer({ key: 'test', reducer });
      return null;
    };
  });

  it('should inject a given reducer', () => {
    render(
      <Provider store={store}>
        <ComponentWithReducer />
      </Provider>
    );

    expect(injectors.injectReducer).toHaveBeenCalledTimes(1);
    expect(injectors.injectReducer).toHaveBeenCalledWith('test', reducer);
  });
});
