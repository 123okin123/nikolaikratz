import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  match as MatchProp, Route,
  Switch,
} from 'react-router-dom';
import useBlogData from '../../hooks/static-queries/use-blog-data';
import { Card } from '../card/card';
import blogListStyles from './portfolio-list.module.scss';

function PortfolioList({ match }: {match: MatchProp<{id: string}>}): ReactElement {
  const blogData = useBlogData();
  function renderBlogData() {
    return (
      <div className={blogListStyles.horizontalScrollWrapper}>
        {blogData
          .filter((blog) => blog.node?.frontmatter?.title !== '')
          .map((blog) => (
            <Card
              key={blog.node.id}
              isSelected={match.params.id === blog.node.id}
              data={{
                title: blog.node.frontmatter?.title,
                titleColor: blog.node.frontmatter?.titleColor,
                bgGradientFrom: blog.node.frontmatter?.bgGradientFrom,
                bgGradientTo: blog.node.frontmatter?.bgGradientTo,
                image: blog.node.frontmatter?.image?.childImageSharp?.fluid,
                type: blog.node.frontmatter?.type || 'web',
              }}
              id={blog.node.id}
            />
          ))}
      </div>
    );
  }
  return (
    <section>
      <div className="container mx-auto px-6">
        <h3 className="font-semibold text-3xl ">Portfolio</h3>
      </div>
      <div>{renderBlogData()}</div>
    </section>
  );
}

export const PortfolioListRouted = (): ReactElement => (
  <Router>
    <Switch>
      <Route
        path={['/:id', '/']}
        render={({ match }) => <PortfolioList match={match} />}
      />
    </Switch>
  </Router>
);
