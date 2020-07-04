import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Material UI imports
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Header from './header';
import '../assets/styles/layout.css';

const useStyles = makeStyles(() =>
  createStyles({
    pageContainer: {
      margin: `0 auto`,
      maxWidth: 1200,
      padding: `50px 1.0875rem 1.45rem`,
    },
  })
);

const Layout: React.FC<LayoutProps> = ({ children = [] }: LayoutProps) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={classes.pageContainer}>
        <main>{children}</main>
      </div>
    </>
  );
};

interface LayoutProps {
  children: Array<JSX.Element>;
}

export default Layout;
