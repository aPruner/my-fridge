import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../../pages/index';

test('should render index page correctly', () => {
  const wrapper = shallow(<IndexPage />);
  expect(wrapper).toMatchSnapshot();
});
