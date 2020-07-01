import React from 'react';
import { shallow } from 'enzyme';
import { StaticQuery } from 'gatsby';
import SEO from '../../components/seo';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }: { render: any }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  );
});

test('should render SEO component correctly', () => {
  const wrapper = shallow(<SEO title="MyFridge" />);
  expect(wrapper).toMatchSnapshot();
});
