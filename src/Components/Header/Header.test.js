import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Header
        toggleShowLogin={jest.fn()}
        user={{ email: 'test@test.com' }}
        handleLogout={jest.fn()}
        showNav
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should show appropriate navigation when user is not signed in', () => {
    const noUser = shallow(
      <Header
        toggleShowLogin={jest.fn()}
        user={null}
        handleLogout={jest.fn()}
        showNav
      />,
    );
    expect(noUser).toMatchSnapshot();
  });

  it('should not show navigation when showNav is false', () => {
    const noNav = shallow(
      <Header
        toggleShowLogin={jest.fn()}
        user={{ email: 'test@test.com' }}
        handleLogout={jest.fn()}
        showNav={false}
      />,
    );
    expect(noNav).toMatchSnapshot();
  });
});
