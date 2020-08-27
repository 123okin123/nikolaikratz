import React, { ReactElement } from 'react';
import styles from './portfolio-card.module.scss';

export interface PortfolioCardData {
  item: {
    title: string;
    titleColor: string;
    bgGradientFrom: string;
    bgGradientTo: string;
    image: string;
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
        background: 'linear-gradient(180deg, #5BCDF8, #0064D9)',
      }}
      className={`${styles.card} bg-gradient-to-b from-teal-400 to-blue-500`}
    >
      <div style={{ color: '#fff' }} className="px-6 py-4 text-center">
        <p className="text-xl mb-2 font-semibold">{item?.title}</p>
      </div>
      <img className="w-full" src="/img/card-top.jpg" alt={item?.title} />

      <img className="w-16 mx-auto" src={icons[item?.type]} alt={item?.type} />

    </div>
  );
}
