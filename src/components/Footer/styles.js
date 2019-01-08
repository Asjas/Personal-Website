import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { media } from '../../utils/media';

export const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
  gap: 10px;
  align-self: end;

  ${media.laptop`
    align-self: center;
    max-width: 320px;
    gap: 10px;
  `};
`;

export const SocialMediaIcon = styled(OutboundLink)`
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg {
    fill: ${props => props.color};
    height: ${props => props.theme.svgL};
    width: ${props => props.theme.svgL};

    &:hover {
      fill: ${props => props.theme.gold};
    }
  }

  &:focus {
    svg {
      fill: ${props => props.theme.gold};
    }
  }

  span {
    position: absolute;
    left: -9999px;
  }

  ${media.laptopL`
    svg {
      height: ${props => props.theme.svgMd};
      width: ${props => props.theme.svgMd};
    }
  `};
`;
