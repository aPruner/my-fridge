import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ShoppingListGrid from '../components/shoppingListCard';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <ShoppingListGrid />
  </Layout>
);

export default IndexPage;
