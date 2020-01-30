import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile', () => {
  let wrapper;
  const mockHandleUpdateProfile = jest.fn();
  it('should match the snapshot when edit profile is false', () => {
    wrapper = shallow(<Profile
      email="test@test.com"
      address="123 test blvd"
      phone="1112223333"
      dob="1990-10-10"
      securityOne="Roger"
      securityTwo="Fido"
      securityThree="Minneapolis"
      photoURL="https://mockHost.com/userID/profile.jpg"
      handleUpdateProfile={mockHandleUpdateProfile}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when edit profile is true', () => {
    const editTrueWrapper = shallow(<Profile
      email="test@test.com"
      address="123 test blvd"
      phone="1112223333"
      dob="1990-10-10"
      securityOne="Roger"
      securityTwo="Fido"
      securityThree="Minneapolis"
      photoURL="https://mockHost.com/userID/profile.jpg"
      handleUpdateProfile={mockHandleUpdateProfile}
    />);
    editTrueWrapper.setState({ showEditProfile: true });
    expect(editTrueWrapper).toMatchSnapshot();
  });

  it('toggleShowEditProfile should toggle showEditProfile in state', () => {
    expect(wrapper.state('showEditProfile')).toEqual(false);
    wrapper.instance().toggleShowEditProfile();
    expect(wrapper.state('showEditProfile')).toEqual(true);
  });
});
