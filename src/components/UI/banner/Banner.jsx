import React from 'react';
import Card from '../card/Card';
import './style.css';

function Banner({
  setYes,
  setNo,
  children: [bannerHeader, bannerButtons, bannerFooter],
}) {
  return (
    <div className='banner'>
      <div className='banner__card'>
        <Card>
          {bannerHeader}
          <div className='banner__buttons'>{bannerButtons}</div>
          {bannerFooter}
        </Card>
      </div>
    </div>
  );
}

export default Banner;
