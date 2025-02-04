import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useTransition, animated } from '@react-spring/web';

interface FlipCardProps {
  value: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ value }) => {
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    setCurrent(value);
  }, [value]);

  const transitions = useTransition(current, {
    from: { transform: 'rotateX(90deg)', opacity: 0, position: 'absolute', width: '100%' },
    enter: { transform: 'rotateX(0deg)', opacity: 1, position: 'relative', width: '100%' },
    leave: { transform: 'rotateX(-90deg)', opacity: 0, position: 'absolute', width: '100%' },
    config: { duration: 300 },
  });

  return (
    <Container className="p-0">
      {transitions((style, item) => (
        <animated.div className="w-100 cs-bg-number py-3" style={style}>
          <h2 className="display-1 cs-fc-red m-0">
            {String(item).padStart(2, '0')}
          </h2>
        </animated.div>
      ))}
    </Container>
  );
};

export default FlipCard;
