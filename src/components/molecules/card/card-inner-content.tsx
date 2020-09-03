import { motion } from 'framer-motion';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { BiXCircle } from 'react-icons/bi';
import { IoIosLaptop, IoIosPhonePortrait } from 'react-icons/io';
import styled from 'styled-components';
import { IconButton } from '../../atoms/icon-button';
import { closeSpring, openSpring } from './animations';

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
          {data.title}
        </Title>
        <Content>
          <motion.p
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            initial={'hidden'}
            animate={isSelected ? 'visible' : 'hidden'}
            transition={{ ease: 'easeOut', duration: 2, delay: 0.3 }}
          >
            tccdscscsc cdscd cscd cdscd ds dc cs cd cdjs cjk est
          </motion.p>
        </Content>
        <Icon>{icons[data.type!] === 'app' ? <IoIosPhonePortrait /> : <IoIosLaptop />}</Icon>
        <p>{data.type}</p>
      </Wrapper>
    );
  }
);

const Title = styled(motion.p)`
  position: absolute;
  bottom: 0px;
  left: 25px;
  font-weight: 500;

  .open & {
    bottom: auto;
    top: 40%;
  }
`;

const Content = styled(motion.div)`
  height: 0;
  background-color: white;
  width: 100%;
  padding: 20px;
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
  max-width: 500px;
  margin: auto;
  position: relative;
`;

const Background = styled.div`
  height: 100%;
  .open & {
    height: 50%;
  }
`;

const Icon = styled.div`
  position: absolute;
  font-size: 3em;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  color: ${({ theme }) => theme.colors.white};

  .open & {
    top: calc(40% - 30px);
    left: 25px;
  }
`;
