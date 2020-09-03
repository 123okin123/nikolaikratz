import { useInvertedScale, motion } from 'framer-motion';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BiXCircle } from 'react-icons/bi';
import { IconButton } from '../../atoms/icon-button';
import { openSpring, closeSpring } from './animations';

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
  ({ isSelected, data }: CardContentDataProps) => {
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
        <motion.div
          initial="hidden"
          animate={isSelected ? 'visible' : 'hidden'}
          transition={isSelected ? { delay: 0.5 } : {}}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          <CloseLink to="/">
            <BiXCircle />
          </CloseLink>
        </motion.div>

        <Title
          transition={isSelected ? openSpring : closeSpring}
          style={{ color: data.titleColor }}
        >
          <p>{data.title}</p>
        </Title>

        <Content>test</Content>
        <img src={icons[data.type!]} alt={data.type} />
        <p>{data.type}</p>
      </Wrapper>
    );
  }
);

const Title = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  left: 10px;

  .open & {
    bottom: auto;
    top: 40%;
  }
`;

const Content = styled(motion.div)`
  height: 0;
  background-color: white;
  width: 100%;
  .open & {
    height: 50%;
  }
`;

const CloseLink = styled(IconButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Background = styled.div`
  height: 100%;
  .open & {
    height: 50%;
  }
`;
