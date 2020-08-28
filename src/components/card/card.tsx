import * as React from 'react';
import { memo, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
// import { Link } from 'gatsby';
import { useHistory, Link } from 'react-router-dom';
import { CardContent, CardContentData } from './card-content';
import { Title } from './Title';
import { Image } from './Image';
import { openSpring, closeSpring } from './animations';
import { useInvertedBorderRadius } from '../../hooks/utils/use-inverted-border-radius';
import { useScrollConstraints } from '../../hooks/utils/use-scroll-constraints';
import { useWheelScroll } from '../../hooks/utils/use-wheel-scroll';
import styles from './card.module.scss';

export interface CardData {
  id: string;
  data: CardContentData;
  isSelected: boolean;
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

export const Card = memo(
  ({
    isSelected,
    id,
    data,
  }: CardData) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);
    const history = useHistory();

    // Maintain the visual border radius when we
    // perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, isSelected);

    function checkSwipeToDismiss() {
      if (y.get() > dismissDistance) { history.push('/'); }
    }

    function checkZIndex(latest: {
      [key: string]: React.ReactText;
    }) {
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
      <div ref={containerRef} style={{ position: 'relative' }}>
        <Overlay isSelected={isSelected} />
        <div className={`${styles.cardContentContainer} ${isSelected && styles.open}`}>
          <motion.div
            ref={cardRef}
            layout
            className={styles.cardContent}
            style={{ ...inverted, zIndex, y }}
            transition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? 'y' : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <CardContent data={data} />
          </motion.div>
        </div>
        {!isSelected && <Link to={`/${id}`} className={styles.cardOpenLink} />}
      </div>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected,
);

const Overlay = ({ isSelected }: {isSelected: boolean}) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className={styles.overlay}
  >
    <Link to="/" />
  </motion.div>
);
