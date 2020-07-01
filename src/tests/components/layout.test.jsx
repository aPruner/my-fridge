import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/layout';

test('should render Layout component correctly', () => {
  const wrapper = shallow(<Layout siteTitle="MyFridge" />);
  expect(wrapper).toMatchSnapshot();
});
