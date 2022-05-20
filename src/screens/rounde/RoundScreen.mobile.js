import { useState } from 'react';
import StopWatchBrain from '../../components/stopWatch/StopWatchBrain';
import ScoreTable from '../../components/scoreTable/ScoreTable';
import { secToString } from '../../utils/ClockCalc';

import './style.css';
const arrOfPoints = [
  '1)',
  '2)',
  '3)',
  '4)',
  '5)',
  '6)',
  '7)',
  '8)',
  '9)',
  '10)',
  '11)',
  '12)',
  '13)',
  '14)',
  '15)',
];
function RoundScreenMobile({ numOfPoints }) {
  const pointsNames = arrOfPoints.slice(0, numOfPoints);
  const [splitPoints, setSplitPoints] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const setFinish = (arg1, arg2) => {
    console.log(arg1);
    console.log(arg2);
  };
  const insertScoresTable = () => {
    if (pointsNames.length < 8) {
      return (
        <ScoreTable
          points={splitPoints}
          pointName={pointsNames}
          isLastTable={true}
        />
      );
    } else {
      return (
        <>
          <ScoreTable
            points={splitPoints.slice(0, 8)}
            pointName={pointsNames.slice(0, 8)}
            isLastTable={false}
          />
          <ScoreTable
            points={splitPoints.slice(8, pointsNames.length)}
            pointName={pointsNames.slice(8, pointsNames.length)}
            isLastTable={true}
          />
        </>
      );
    }
  };
  return (
    <div className='RoundScreenMobile'>
      <section className='RoundScreenMobile__section'>
        <div className='RoundScreenMobile__head '></div>
        <div className='RoundScreenMobile__scores'>
          {
            <h1 className='RoundScreenMobile__seconds'>
              {secToString(seconds)}
            </h1>
          }
          <div>{insertScoresTable()}</div>
        </div>
        <div className='RoundScreenMobile__footer'>
          <StopWatchBrain
            splitPoints={splitPoints}
            setSplitPoints={setSplitPoints}
            setFinish={setFinish}
            numOfPoints={numOfPoints}
            setSeconds={setSeconds}
            seconds={seconds}
          />
        </div>
      </section>
    </div>
  );
}

export default RoundScreenMobile;
