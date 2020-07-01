import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../../pages/index';

test('should render IndexPage correctly', () => {
  const wrapper = shallow(<IndexPage />);
  expect(wrapper).toMatchSnapshot();
});
