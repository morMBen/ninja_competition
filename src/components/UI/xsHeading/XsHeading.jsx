import React from 'react';
import './style.css';
function XsHeading({ text, addClass, isRtl }) {
  return (
    <h4 className={`${addClass} xs-heading ${isRtl && 'text-rtl'}`}>{text}</h4>
  );
}

export default XsHeading;
