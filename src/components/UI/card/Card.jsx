import React from 'react';
import './style.css';
function Card({ children, style, onClick }) {
  return (
    <div onClick={onClick} className='card' style={style}>
      {children}
    </div>
  );
}

export default Card;
