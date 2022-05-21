import React from 'react';
import './style.css';
function MediumHeading({ text, addClass, isRtl }) {
  return (
    <h3 className={`${addClass} medium-heading ${isRtl && 'text-rtl'}`}>
      {text}
    </h3>
  );
}

export default MediumHeading;
