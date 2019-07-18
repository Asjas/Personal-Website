import React, { memo } from 'react';

import { format, formatDistance } from 'date-fns';
import { useSpring } from 'react-spring';

import * as Styled from './style';

interface Props {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      updated_at: string;
      tags: string[];
      featured_image: {
        childImageSharp: {
          fluid: {
            aspectRatio: number;
            base64: string;
            sizes: string;
            src: string;
            srcSet: string;
            srcSetWebp: string;
            srcWebp: string;
          };
        };
      };
    };
  };
}

const calc = (x: number, y: number): number[] => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 40,
  1.1,
];
const trans = (x: number, y: number, s: number): string =>
  `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const BlogEntryCard: React.FunctionComponent<Props> = memo(
  ({ node }): React.ReactElement => {
    const [{ xys }, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 5, tension: 350, friction: 40 },
    }));

    return (
      <Styled.Section
        key={node.id}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: xys.interpolate(trans) }}
      >
        <Styled.Image fluid={node.frontmatter.featured_image.childImageSharp.fluid} alt="" />
        <Styled.BlogLink to={`/blog${node.fields.slug}`}>
          <Styled.Heading>{node.frontmatter.title}</Styled.Heading>
        </Styled.BlogLink>
        <Styled.BlogDate>
          Published:{' '}
          <time dateTime={format(new Date(node.frontmatter.date), 'yyyy-MM-dd')}>
            {formatDistance(new Date(node.frontmatter.date), new Date(), {
              addSuffix: true,
            })}
          </time>
        </Styled.BlogDate>
        <Styled.BlogDate>
          Last Updated:{' '}
          <time dateTime={format(new Date(node.frontmatter.updated_at), 'yyyy-MM-dd')}>
            {formatDistance(new Date(node.frontmatter.updated_at), new Date(), {
              addSuffix: true,
            })}
          </time>
        </Styled.BlogDate>
        <Styled.BlogTags>
          {node.frontmatter.tags.map(tag => (
            <Styled.BlogLink key={tag} className="blogpost__tag" to={`/tags/${tag}`}>
              {`#${tag}`}
            </Styled.BlogLink>
          ))}
        </Styled.BlogTags>
      </Styled.Section>
    );
  },
);

BlogEntryCard.displayName = 'BlogEntryCard';

export default BlogEntryCard;