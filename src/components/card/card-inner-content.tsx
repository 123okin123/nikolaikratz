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
  data: {
    title?: string;
    titleColor?: string;
    bgGradientFrom?: string;
    bgGradientTo?: string;
    image?: FluidObject | FluidObject[];
    type?: string;
  }
}

export const CardInnerContent = React.memo<CardContentDataProps>(({ data }: CardContentDataProps) => {
  const inverted = useInvertedScale();
  const icons: {[type: string]: string} = {
    web: '/image/laptop.svg',
    app: '/image/smart-phone.svg',
  };

  return (
    <div
      className="w-100 h-100 object-left-bottom"
      style={{
        background: `linear-gradient(180deg, ${data.bgGradientFrom}, ${data.bgGradientTo})`,
      }}
    >
      <div style={{ color: data.titleColor }} className="px-6 py-6">
        <p className="text-xl font-semibold">{data.title}</p>
      </div>

      <img className="w-14 absolute mx-auto mt-6 " src={icons[data.type!]} alt={data.type} />
      <p className="text-center mb-6 ">{data.type}</p>
    </div>
  );
});
