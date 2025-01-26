import React from 'react';
import { useSpring, animated } from 'react-spring';

const MotionBackground = () => {
  const props = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 5000 },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(270deg, #0d6efd, #052c65)',
        backgroundSize: '100% 100%',
        ...props,
      }}
    />
  );
};

export default MotionBackground;
