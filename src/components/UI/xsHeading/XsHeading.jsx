import React from 'react';
import './style.css';
function XsHeading({ text, addClass, isRtl, style }) {
  return (
    <h4
      style={style}
      className={`${addClass} xs-heading ${isRtl && 'text-rtl'}`}
    >
      {text}
    </h4>
  );
}

export default XsHeading;
