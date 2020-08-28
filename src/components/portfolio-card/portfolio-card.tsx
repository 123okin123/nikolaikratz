import React, { ReactElement } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import styles from './portfolio-card.module.scss';

export interface PortfolioCardData {
  item: {
    title: string;
    titleColor: string;
    bgGradientFrom: string;
    bgGradientTo: string;
    image: FluidObject | FluidObject[];
    type: string;
  }
}

export default function PortfolioCard({ item }: PortfolioCardData): ReactElement {
  const icons: {[type: string]: string} = {
    web: '/image/laptop.svg',
    app: '/image/smart-phone.svg',
  };

  return (
    <div
      style={{
        background: `linear-gradient(180deg, ${item?.bgGradientFrom}, ${item.bgGradientTo})`,
      }}
      className={`${styles.card}`}
    >
      <div style={{ color: item?.titleColor }} className="px-6 py-4 text-center">
        <p className="text-xl font-semibold">{item?.title}</p>
      </div>
      <div className={styles.imageContainer}>
        <Img
          fluid={item?.image}
          alt={item?.title}
        />
      </div>

      <img className="w-16 mx-auto" src={icons[item?.type]} alt={item?.type} />

    </div>
  );
}
