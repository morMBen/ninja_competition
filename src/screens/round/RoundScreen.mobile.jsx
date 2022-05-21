import { useState, useEffect } from 'react';
import StopWatchBrain from '../../components/stopWatch/StopWatchBrain';
import ScoreTable from '../../components/scoreTable/ScoreTable';
import { secToString } from '../../utils/ClockCalc';

import './style.css';
import LargeHeading from '../../components/UI/largeHeading/LargeHeading';
import MediumHeading from '../../components/UI/mediumHeading/MediumHeading';
const arrOfPoints = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
];
function RoundScreenMobile({ numOfPoints, competitorName, setFinish }) {
  const [pointsNames, setPointsNames] = useState([]);
  const [splitPoints, setSplitPoints] = useState([]);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setPointsNames(arrOfPoints.slice(0, numOfPoints));
  }, [setPointsNames, numOfPoints]);

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
            points={splitPoints.slice(8, pointsNames.length)}
            pointName={pointsNames.slice(8, pointsNames.length)}
            isLastTable={true}
          />
          <ScoreTable
            points={splitPoints.slice(0, 8)}
            pointName={pointsNames.slice(0, 8)}
            isLastTable={false}
          />
        </>
      );
    }
  };
  return (
    <div className='RoundScreenMobile'>
      <section className='RoundScreenMobile__section'>
        <div className='RoundScreenMobile__head '>
          <MediumHeading text={competitorName} isRtl={true} />
        </div>
        <div className='RoundScreenMobile__scores'>
          <LargeHeading
            style={{ padding: '1rem' }}
            text={secToString(seconds)}
          />
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
