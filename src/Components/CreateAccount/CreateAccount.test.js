import React from 'react';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';

describe('CreateAccount', () => {
  let wrapper;
  const mockToggleShowCreateAccount = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CreateAccount toggleShowCreateAccount={mockToggleShowCreateAccount} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange should change corresponding property in state with a given value', () => {
    const mockEmailEvent = {
      target: {
        name: 'email',
        value: 'newEmailHere@yahoo.com',
      },
    };
    const mockPhoneEvent = {
      target: {
        name: 'phone',
        value: '0000000000',
      },
    };
    wrapper.instance().handleChange(mockEmailEvent);
    expect(wrapper.state('email')).toEqual('newEmailHere@yahoo.com');
    wrapper.instance().handleChange(mockPhoneEvent);
    expect(wrapper.state('phone')).toEqual('0000000000');
  });

  it('verifyPasswords should make sure the passwords provided are the same', () => {
    wrapper.setState({ password: 'password', passwordConfirm: 'password' });
    let result = wrapper.instance().verifyPasswords();
    expect(result).toEqual(true);
    wrapper.setState({ passwordConfirm: 'not matching' });
    result = wrapper.instance().verifyPasswords();
    expect(result).toEqual(false);
  });

  it('verifyFormCompletion should make sure all fields have input', () => {
    let result = wrapper.instance().verifyFormCompletion();
    expect(result).toEqual(false);
    wrapper.setState({
      phone: '1231231234',
      dob: '2000-01-01',
      profile: '<img>',
      address: '123 test ct',
      securityOne: 'answer1',
      securityTwo: 'answer2',
      securityThree: 'answer3',
      password: 'password',
      passwordConfirm: 'password',
    });
    result = wrapper.instance().verifyFormCompletion();
    expect(result).toEqual(false);
    wrapper.setState({ email: 'testEmail@yahoo.com' });
    result = wrapper.instance().verifyFormCompletion();
    expect(result).toEqual(true);
  });

  it('handleImgChange should update state of new image added by user', () => {
    const mockEvent = {
      target: {
        files: ['this is an image'],
      },
    };
    expect(wrapper.state('profile')).toEqual('');
    wrapper.instance().handleImgChange(mockEvent);
    expect(wrapper.state('profile')).toEqual('this is an image');
  });
});
