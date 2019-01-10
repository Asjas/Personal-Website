import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { Container, Paragraph } from '../styles/portfolio';

export const GET_PRISMIC_PROJECTS = graphql`
  query GET_PRISMIC_PROJECTS {
    allPrismicProjects {
      edges {
        node {
          slugs
          data {
            title {
              text
            }
            description {
              text
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1350, quality: 92) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            website_url {
              url
            }
            github_url {
              url
            }
          }
        }
      }
    }
  }
`;

const seo = {
  title: 'A-J Roos | Portfolio',
  description:
    'This is a collection of some of my Web Development projects. My complete collection of projects can be found on my Github Page at https://github.com/asjas.',
  siteUrl: 'https://asjas.co.za/portfolio',
};

const PortfolioPage = ({
  data: {
    allPrismicProjects: { edges },
  },
}) => (
  <Layout>
    <SEO {...seo} />
    <Container>
      {console.log(edges)}
      <Paragraph>To be added</Paragraph>
    </Container>
  </Layout>
);

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    allPrismicProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            data: PropTypes.shape({
              title: PropTypes.object.isRequired,
              description: PropTypes.object.isRequired,
              image: PropTypes.object.isRequired,
              website_url: PropTypes.object.isRequired,
              github_url: PropTypes.object.isRequired,
            }).isRequired,
            slugs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PortfolioPage;
