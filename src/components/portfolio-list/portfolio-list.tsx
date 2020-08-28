import { Link } from 'gatsby';
import React, { ReactElement } from 'react';
import useBlogData from '../../static-queries/useBlogData';
import blogListStyles from './portfolio-list.module.scss';
import PortfolioCard from '../portfolio-card/portfolio-card';

export default function PortfolioList(): ReactElement {
  const blogData = useBlogData();
  const item = {
    title: 'Ciara',
    titleColor: '',
    bgGradientFrom: '',
    bgGradientTo: '',
    image: '',
    type: 'web',
  };
  function renderBlogData() {
    return (
      <div className="flex space-x-6">
        {blogData
          .filter((blog: any) => blog.node?.frontmatter?.title !== '')
          .map((blog: any) => (
            <PortfolioCard item={{
              title: blog.node.frontmatter?.title,
              titleColor: '#fff',
              bgGradientFrom: '#5BCDF8',
              bgGradientTo: '#0064D9',
              image: blog.node.frontmatter?.hero_image?.childImageSharp?.fluid,
              type: 'web',
            }}
            />
            // <Link to={`/blog/${blog.node.fields?.slug}`} key={blog.node.id}>
            //   <li className={blogListStyles.li} key={blog.node.fields?.slug}>
            //     <div className={blogListStyles.list__hero}>
            //       {blog.node.frontmatter?.hero_image?.childImageSharp?.fluid && (
            //         <Img
            //           fluid={
            //             blog.node.frontmatter.hero_image.childImageSharp.fluid
            //           }
            //           alt={blog.node.frontmatter.title}
            //         />
            //       )}
            //     </div>
            //     <div className={blogListStyles.list__info}>
            //       <h2>{blog.node.frontmatter?.title}</h2>
            //       <h3>{blog.node.frontmatter?.date}</h3>
            //       <p>{blog.node.excerpt}</p>
            //     </div>
            //   </li>
            // </Link>
          ))}
      </div>
    );
  }
  return (
    <section>
      <h3 className="font-semibold text-3xl mb-6">Portfolio</h3>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  );
}
