import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header';

test('should render header component correctly', () => {
  const wrapper = shallow(<Header siteTitle="MyFridge" />);
  expect(wrapper).toMatchSnapshot();
});
