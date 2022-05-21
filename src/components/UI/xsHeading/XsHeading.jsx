import React from 'react';

function XsHeading({ text, addClass, isRtl }) {
  return (
    <h4 className={`${addClass} xs-heading ${isRtl && 'text-rtl'}`}>{text}</h4>
  );
}

export default XsHeading;
