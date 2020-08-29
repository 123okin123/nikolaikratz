import { motion, useInvertedScale } from 'framer-motion';
import React, { ReactElement } from 'react';
import Img, { FluidObject } from 'gatsby-image';

import styles from './card-content.module.scss';

export interface CardContentData {
  title?: string;
  titleColor?: string;
  bgGradientFrom?: string;
  bgGradientTo?: string;
  image?: FluidObject | FluidObject[];
  type?: string;
}

export interface CardContentDataProps {
  data: {
    title?: string;
    titleColor?: string;
    bgGradientFrom?: string;
    bgGradientTo?: string;
    image?: FluidObject | FluidObject[];
    type?: string;
  }
}

export const CardContent = React.memo<CardContentDataProps>(({ data }: CardContentDataProps) => {
  const inverted = useInvertedScale();
  const icons: {[type: string]: string} = {
    web: '/image/laptop.svg',
    app: '/image/smart-phone.svg',
  };

  return (
    <div
      style={{
        background: `linear-gradient(180deg, ${data.bgGradientFrom}, ${data.bgGradientTo})`,
      }}
    >
      <div style={{ color: data.titleColor }} className="px-6 py-6 text-center">
        <p className="text-xl font-semibold">{data.title}</p>
      </div>
      <div className={styles.imageContainer}>
        {data.image
        && (
          <Img
            fluid={data.image}
            alt={data.title}
          />
        )}
      </div>

      <img className="w-16 mx-auto mt-6" src={icons[data.type!]} alt={data.type} />
      <p className={`text-center mb-6 ${styles.typeText}`}>{data.type}</p>
    </div>
  );
});
