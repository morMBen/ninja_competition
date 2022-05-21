import React from 'react';
import './style.css';
function LargeHeading({ style, text, addClass, isRtl }) {
  return (
    <h3
      style={style}
      className={`${addClass} large-heading ${isRtl && 'text-rtl'}`}
    >
      {text}
    </h3>
  );
}

export default LargeHeading;
