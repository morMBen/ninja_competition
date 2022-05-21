import React from 'react';
import './style.css';
import '../../../utils/styles/lang/lang.css';
function SmallHeading({ text, addClass, isRtl }) {
  return (
    <h4 className={`${addClass} small-heading ${isRtl && 'text-rtl'}`}>
      {text}
    </h4>
  );
}

export default SmallHeading;
