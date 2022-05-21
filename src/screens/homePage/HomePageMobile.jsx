import React, { useEffect } from 'react';
import LargeHeading from '../../components/UI/largeHeading/LargeHeading';
import '../../utils/styles/global/global.css';
import './style.css';
import Card from '../../components/UI/card/Card';
import MediumHeading from '../../components/UI/mediumHeading/MediumHeading';
import { useNavigate } from 'react-router-dom';
function HomePageMobile({ setIsNavOpen }) {
  useEffect(() => {
    setIsNavOpen(true);
  }, [setIsNavOpen]);
  const navigate = useNavigate();
  return (
    <div className='home-page-mobile'>
      <div className='home-page-mobile__header'>
        <div className='box-8vh'></div>
        <div className='home-page-mobile__header-text'>
          <LargeHeading text='משפט מעצים' isRtl={true} />
        </div>
      </div>

      <div className='home-page-mobile__body'>
        <Card />
        <Card
          onClick={() => {
            setIsNavOpen(false);
            navigate('/speed-round');
          }}
          style={{ padding: '1rem', borderWidth: '4px' }}
        >
          <LargeHeading text='מסלול מהיר' isRtl={true} />
          <MediumHeading
            text='פשוט להיכנס לבחור מספר מכשולים ולהתחיל לרוץ'
            isRtl={true}
          />
        </Card>

        <Card />
        <Card />
        <Card />
      </div>
      {/* <RoundScreenMobile numOfPoints={14} competitorName={'דני דנינו'} /> */}
    </div>
  );
}

export default HomePageMobile;
