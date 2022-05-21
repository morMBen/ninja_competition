import React from 'react';
import './style.css';
function LargeHeading({ text, addClass, isRtl }) {
  return (
    <h3 className={`${addClass} large-heading ${isRtl && 'text-rtl'}`}>
      {text}
    </h3>
  );
}

export default LargeHeading;
