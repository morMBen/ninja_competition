import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/UI/banner/Banner';
import MediumHeading from '../../components/UI/mediumHeading/MediumHeading';
import SmallHeading from '../../components/UI/smallHeading/SmallHeading';
import XsHeading from '../../components/UI/xsHeading/XsHeading';
import { secToString } from '../../utils/ClockCalc';
import RoundScreenMobile from '../round/RoundScreen.mobile';
import './style.css';
function SpeedRound({ roundType }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [numOfPoints, setNumOfPoints] = useState(null);
  const [isOnRound, setIsOnRound] = useState(false);
  const [message, setMessage] = useState('');
  const [isResetBannerOn, setIsResetBannerOn] = useState(false);
  const [pointsScores, setPointsScores] = useState(null);

  const handleSubmit = () => {
    if (numOfPoints > 2 && numOfPoints <= 15) {
      setIsOnRound(true);
    } else {
      if (!(numOfPoints <= 15)) {
        setMessage('Max point is 15, please fill again');
      } else {
        setMessage('Please choose number of points in the race 1-15');
      }
    }
  };
  const handleFinnish = (points) => {
    setPointsScores(points);
    setIsResetBannerOn(true);
  };
  const insertPassedFellStat = () => {
    if (pointsScores[0].seconds) {
      const numOfPassed = pointsScores.reduce((acc, cur) => {
        return acc + (cur.passed ? 1 : 0);
      }, 0);
      return (
        <MediumHeading
          text={`${numOfPassed} מתוך ${pointsScores.length} מכשולים `}
          isRtl={true}
        />
      );
    }
  };
  const insertFinnishBanner = () => {
    return (
      <Banner>
        <>
          <MediumHeading text={` מעולה!`} isRtl={true} />
          <SmallHeading text={` אלו התוצאות שלך:`} isRtl={true} />
          {pointsScores.map((point, index) => (
            <React.Fragment key={point.seconds || point}>
              <XsHeading
                style={{
                  color: point.seconds && !point.passed ? 'red' : 'green',
                  fontWeight: 'bold',
                }}
                text={`${index + 1} 
                 ${secToString(point.seconds || point)}`}
                isRtl={true}
              />
            </React.Fragment>
          ))}
          {insertPassedFellStat()}
          <SmallHeading
            text={`תרצה לצאת? או שאולי צריך זמן לרשום את הנתונים?`}
            isRtl={true}
          />
        </>
        <>
          <button
            onClick={() => {
              setIsResetBannerOn(false);
              navigate('/');
            }}
          >
            לצאת
          </button>
          <button onClick={() => setIsResetBannerOn(false)}>להישאר</button>
        </>

        <XsHeading
          text='* ברגע שתבחרו לצאת הנתונים ימחקו לתמיד.'
          isRtl={true}
        />
      </Banner>
    );
  };
  const insertSelectionForm = () => {
    return (
      <div className='speed-round'>
        <label htmlFor='speed-round-name'>name</label>
        <input
          id='speed-round-name'
          type='text'
          onChange={({ target }) => setName(target.value)}
        />

        <label htmlFor='number-of-points'>number-of-points</label>
        <input
          id='number-of-points'
          type='number'
          onChange={({ target }) => setNumOfPoints(target.value)}
        />
        <button onClick={handleSubmit}>Start</button>
        {message}
      </div>
    );
  };
  return (
    <>
      {!isOnRound ? (
        insertSelectionForm()
      ) : (
        <>
          {roundType === 'speed' && (
            <RoundScreenMobile
              numOfPoints={Number(numOfPoints)}
              competitorName={name}
              setFinish={handleFinnish}
              type={'speed'}
            />
          )}
          {roundType === 'semi-official' && (
            <RoundScreenMobile
              numOfPoints={Number(numOfPoints)}
              competitorName={name}
              setFinish={handleFinnish}
              type={'semi-official'}
            />
          )}
        </>
      )}
      {isResetBannerOn && insertFinnishBanner()}
    </>
  );
}

export default SpeedRound;
