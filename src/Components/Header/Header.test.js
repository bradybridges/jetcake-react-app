import React from 'react'
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should match snapshot', () => {
  const wrapper = shallow(<Header 
    toggleShowLogin={jest.fn()} 
    user={{email: "test@test.com"}} 
    handleLogout={jest.fn()} 
  />);
  expect(wrapper).toMatchSnapshot();
  });
})

// toggleShowLogin={this.toggleShowLogin} user={this.state.user} handleLogout={this.handleLogout}