import { graphql, useStaticQuery } from 'gatsby';

export default function useBlogData() {
  const data = useStaticQuery<GatsbyTypes.getBlogDataQuery>(graphql`
    query getBlogData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              title
              titleColor
              company
              bgGradientFrom
              bgGradientTo
              type
              image {
                childImageSharp {
                  fluid( maxWidth: 800 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.edges;
}
