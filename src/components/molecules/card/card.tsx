import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'gatsby';
import * as React from 'react';
import { memo, useRef } from 'react';
import { useNavigate } from '@reach/router';
import styled from 'styled-components';
import { closeSpring, openSpring } from './animations';
import { CardInnerContent, CardContentData } from './card-inner-content';
import { useInvertedBorderRadius } from '../../../hooks/utils/use-inverted-border-radius';
import { useScrollConstraints } from '../../../hooks/utils/use-scroll-constraints';

export interface CardData {
  id: string;
  data: CardContentData;
  isSelected: boolean;
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

export const Card = memo(
  ({ isSelected, id, data }: CardData) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);
    const navigate = useNavigate();

    // Maintain the visual border radius when we
    // perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      if (y.get() > dismissDistance) {
        navigate('/');
      }
    }

    function checkZIndex(latest: { [key: string]: React.ReactText }) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }
    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    // useWheelScroll(
    //   containerRef,
    //   y,
    //   constraints,
    //   checkSwipeToDismiss,
    //   isSelected,
    // );

    return (
      <div ref={containerRef} style={{ position: 'relative', width: '200px', height: '300px' }}>
        <Overlay isSelected={isSelected} />
        <CardContentContainer className={isSelected ? 'open' : ''}>
          <CardContent
            ref={cardRef}
            layout
            style={{ ...inverted, zIndex, y }}
            transition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? 'y' : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <CardInnerContent isSelected={isSelected} data={data} />
          </CardContent>
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

const CardContentContainer = styled.div`
  display: block;
  height: 100%;
  pointer-events: none;
  position: relative;
  width: 100%;
  &.open {
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  }
`;

const CardContent = styled(motion.div)`
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.29);

  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.29);
  height: 100%;
  margin: 0 auto;
  overflow: hidden;

  pointer-events: auto;
  position: relative;
  width: 100%;

  .open & {
    height: auto;
    max-width: 700px;
    overflow: hidden;
    width: 100%;
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
