import { useInvertedScale } from 'framer-motion';
import { FluidObject } from 'gatsby-image';
import React from 'react';

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
    const icons: {[type: string]: string} = {
      web: '/image/laptop.svg',
      app: '/image/smart-phone.svg',
    };

    return (
      <div style={{ padding: '20px' }}>
        <div style={{
          height: '20px',
          background: `linear-gradient(180deg, ${data.bgGradientFrom}, ${data.bgGradientTo})`,
        }}
        />

        <div style={{ color: data.titleColor }}>
          <p>{data.title}</p>
        </div>

        <img src={icons[data.type!]} alt={data.type} />
        <p>{data.type}</p>
      </div>
    );
  },
);
