import React from 'react';
import { shallow } from 'enzyme';
import EditProfileForm from './EditProfileForm';

describe('EditProfileForm', () => {
  let wrapper;
  const mockHandleUpdateProfile = jest.fn();
  const mockToggleShowEditProfile = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<EditProfileForm
      email="test@test.com"
      address="123 hello ct"
      phone="1112223333"
      dob="1999-01-01"
      securityOne="James"
      securityTwo="Fido"
      securityThree="Atlanta"
      handleUpdateProfile={mockHandleUpdateProfile}
      toggleShowEditProfile={mockToggleShowEditProfile}
    />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange should update the corresponding property in state with a specified value', () => {
    const mockEmailEvent = {
      target: {
        name: 'email',
        value: 'newEmail@newEmail.com',
      },
    };
    const mockPhoneEvent = {
      target: {
        name: 'phone',
        value: '9999999999',
      },
    };
    expect(wrapper.state('email')).toEqual('test@test.com');
    wrapper.instance().handleChange(mockEmailEvent);
    expect(wrapper.state('email')).toEqual('newEmail@newEmail.com');
    wrapper.instance().handleChange(mockPhoneEvent);
    expect(wrapper.state('phone')).toEqual('9999999999');
  });

  it('handleUpdateProfile should call parent function for every property that has changed', async () => {
    wrapper.setState({ email: 'newEmail@yahoo.com', phone: '1234567891' });
    await wrapper.instance().handleUpdateProfile();
    expect(mockHandleUpdateProfile).toHaveBeenCalledWith('email', 'newEmail@yahoo.com');
    expect(mockHandleUpdateProfile).toHaveBeenCalledWith('phone', '1234567891');
  });
});
