import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const AnimationComponent = () => {
  const location = useLocation();
  const variants: Variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 2000 : -2000,
        opacity: 1,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 2000 : -2000,
        opacity: 1,
      };
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial='enter'
        animate='center'
        exit='exit'
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        key={location.pathname}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationComponent;
