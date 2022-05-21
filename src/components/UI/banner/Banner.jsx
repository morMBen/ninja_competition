import React from 'react';
import Card from '../card/Card';
import SmallHeading from '../smallHeading/SmallHeading';
import XsHeading from '../xsHeading/XsHeading';
import './style.css';

function Banner({ setYes, setNo }) {
  return (
    <div className='banner'>
      <div className='banner__card'>
        <Card>
          <SmallHeading text='אתה בטוח?' isRtl={true} />
          <div className='banner__buttons'>
            <button onClick={setYes}>כן</button>
            <button onClick={setNo}> לא</button>
          </div>
          <XsHeading
            text='אם תמחק את הנתונים לא תוכל לשחזר אותם בהמשך!'
            isRtl={true}
          />
        </Card>
      </div>
    </div>
  );
}

export default Banner;
