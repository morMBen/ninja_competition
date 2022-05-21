import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/UI/banner/Banner';
import MediumHeading from '../../components/UI/mediumHeading/MediumHeading';
import SmallHeading from '../../components/UI/smallHeading/SmallHeading';
import XsHeading from '../../components/UI/xsHeading/XsHeading';
import { secToString } from '../../utils/ClockCalc';
import RoundScreenMobile from '../round/RoundScreen.mobile';
import './style.css';
function SpeedRound() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [numOfPoints, setNumOfPoints] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const [message, setMessage] = useState('');
  const [isResetBannerOn, setIsResetBannerOn] = useState(false);
  const [pointsScores, setPointsScores] = useState(null);

  const handleSubmit = () => {
    if (numOfPoints > 2 && numOfPoints <= 15) {
      setIsOn(true);
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
  return (
    <>
      {!isOn ? (
        <div className='speed-round'>
          <label htmlFor='name'>name</label>
          <input type='text' onChange={({ target }) => setName(target.value)} />

          <label htmlFor='number-of-points'>number-of-points</label>
          <input
            type='number'
            onChange={({ target }) => setNumOfPoints(target.value)}
          />
          <button onClick={handleSubmit}>Start</button>
          {message}
        </div>
      ) : (
        <RoundScreenMobile
          numOfPoints={Number(numOfPoints)}
          competitorName={name}
          setFinish={handleFinnish}
        />
      )}
      {isResetBannerOn && (
        <Banner>
          <>
            <MediumHeading text={` מעולה!`} isRtl={true} />
            <SmallHeading text={` אלו התוצאות שלך:`} isRtl={true} />
            {pointsScores.map((point, index) => (
              <>
                <XsHeading
                  text={`${index + 1}) ${secToString(point)}`}
                  isRtl={true}
                />
              </>
            ))}
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
      )}
    </>
  );
}

export default SpeedRound;
