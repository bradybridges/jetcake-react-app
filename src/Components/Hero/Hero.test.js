import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Hero', () => {
  it('should match snapshot', () => {
    const mockProfile = {
      email: 'test@test.com',
      address: '123 st',
      dob: '1990-01-01',
      phone: '1112223333',
      securityOne: 'a',
      securityTwo: 'b',
      securityThree: 'c',
    };
    const wrapper = shallow(
      <Hero profile={mockProfile} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
