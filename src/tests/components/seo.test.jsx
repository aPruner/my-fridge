import React from 'react';
import { shallow } from 'enzyme';
import SEO from '../../components/seo';

test('should render SEO component correctly', () => {
  const wrapper = shallow(<SEO />);
  expect(wrapper).toMatchSnapshot();
});
