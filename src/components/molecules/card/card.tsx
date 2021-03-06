import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import * as React from 'react';
import { memo } from 'react';
import styled from 'styled-components';
import { closeSpring, openSpring } from './animations';
import { CardContentData, CardInnerContent } from './card-inner-content';

export interface CardData {
  id: string;
  data: CardContentData;
  isSelected: boolean;
}

export const Card = memo(
  ({ isSelected, id, data }: CardData) => {
    return (
      <div style={{ position: 'relative', width: '200px', height: '200px' }}>
        <Overlay isSelected={isSelected} />

        <CardContentContainer
          transition={isSelected ? openSpring : closeSpring}
          layout
          className={isSelected ? 'open' : ''}
        >
          <CardInnerContent isSelected={isSelected} data={data} />
        </CardContentContainer>

        {!isSelected && <CardOpenLink to={`/?project=${id}`} />}
      </div>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

const Overlay = ({ isSelected }: { isSelected: boolean }) => (
  <OverlayContent
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
  >
    <Link to="/" />
  </OverlayContent>
);

const CardContentContainer = styled(motion.div)`
  display: block;
  height: 100%;
  pointer-events: none;
  position: relative;
  width: 100%;
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.29);
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.29);
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;

  &.open {
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 1;
    border-radius: 0px;
  }
`;

const CardOpenLink = styled(Link)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const OverlayContent = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  will-change: opacity;
  z-index: 1;
  & a {
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
  }
`;
