import { useInvertedScale } from 'framer-motion';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export interface CardContentData {
  title?: string;
  titleColor?: string;
  bgGradientFrom?: string;
  bgGradientTo?: string;
  image?: FluidObject | FluidObject[];
  type?: string;
}

export interface CardContentDataProps {
  isSelected: boolean;
  data: CardContentData;
}

export const CardInnerContent = React.memo<CardContentDataProps>(
  ({ data }: CardContentDataProps) => {
    const inverted = useInvertedScale();
    const icons: { [type: string]: string } = {
      web: '/image/laptop.svg',
      app: '/image/smart-phone.svg'
    };

    return (
      <Wrapper>
        <Background
          style={{
            background: `linear-gradient(180deg, ${data.bgGradientFrom}, ${data.bgGradientTo})`
          }}
        />

        <Link to="/">x</Link>
        <div style={{ color: data.titleColor }}>
          <p>{data.title}</p>
        </div>

        <img src={icons[data.type!]} alt={data.type} />
        <p>{data.type}</p>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  height: 100%;
`;

const Background = styled.div`
  height: 100%;
`;
