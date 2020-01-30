import React from 'react';
import { shallow } from 'enzyme';
import ProfileInformation from './ProfileInformation';
import Profile from '../Profile/Profile';

describe('ProfileInformation', () => {
  const wrapper = shallow(<ProfileInformation
    email="test@test.com"
    address="123 test blvd"
    phone="1112223333"
    dob="1990-09-09"
    securityOne="Randall"
    securityTwo="Fido"
    securityThree="Minneapolis"
  />);
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
