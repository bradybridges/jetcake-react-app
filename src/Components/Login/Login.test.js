import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  let wrapper;
  const mockToggleShowLogin = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Login toggleShowLogin={mockToggleShowLogin} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange should update state of email or password', () => {
    const mockEmailEvent = {
      target: { name: 'email', value: 'test@test.com' },
    };
    const mockPasswordEvent = {
      target: { name: 'password', value: 'secretpassword' },
    };
    expect(wrapper.state()).toEqual({ email: '', password: '', error: null });
    wrapper.instance().handleChange(mockEmailEvent);
    expect(wrapper.state('email')).toEqual(('test@test.com'));
    wrapper.instance().handleChange(mockPasswordEvent);
    expect(wrapper.state('password')).toEqual('secretpassword');
  });
});
