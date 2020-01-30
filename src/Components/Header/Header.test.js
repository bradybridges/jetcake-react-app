import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Header
      toggleShowLogin={jest.fn()}
      user={{ email: 'test@test.com' }}
      handleLogout={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

// toggleShowLogin={this.toggleShowLogin} user={this.state.user} handleLogout={this.handleLogout}
