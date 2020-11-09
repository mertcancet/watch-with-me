import React, { useState } from 'react';

export const DurationBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 0);

  return (
    <div className='progress'>
      <div className='progress-done' style={style}>
        {done}%
      </div>
    </div>
  );
};
