import { useLocation } from '@reach/router';
import queryString from 'query-string';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import useBlogData from '../../hooks/static-queries/use-blog-data';
import { Card } from './card/card';

export default function PortfolioList(): ReactElement {
  const blogData = useBlogData();

  const { search } = useLocation();
  const { project } = queryString.parse(search);
  const renderBlogData = () => (
    <div className="">
      {blogData
        .filter((blog) => blog.node?.frontmatter?.title !== '')
        .map((blog) => (
          <Card
            key={blog.node.id}
            isSelected={project === blog.node.id}
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

  return (
    <section>
      <div className="">
        <h3 className="">Portfolio</h3>
      </div>
      <div>{renderBlogData()}</div>
    </section>
  );
}
