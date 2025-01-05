import React from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipeableDemo: React.FC = () => {
  const handlers = useSwipeable({
    onSwipedLeft: () => console.log('Swiped left!'),
    onSwipedRight: () => console.log('Swiped right!'),
    onSwipedUp: () => console.log('Swiped up!'),
    onSwipedDown: () => console.log('Swiped down!'),
    preventScrollOnSwipe: true, // Prevent scrolling while swiping
  });

  return (
    <div
      {...handlers}
      style={{
        width: '300px', 
        height: '300px',
        backgroundColor: '#f5f5f5',
        border: '2px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        color: '#333',
        textAlign: 'center',
        margin: '50px auto',
        userSelect: 'none',
      }}
    >
      Swipe Here!
    </div>
  );
};

export default SwipeableDemo;
