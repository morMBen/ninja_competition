import { useState } from 'react';
import StopWatchBrain from '../../components/stopWatch/StopWatchBrain';
import { secToString } from '../../utils/ClockCalc';
import './style.css';

function RoundScreenMobile() {
  const [splitPoints, setSplitPoints] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const setFinish = (arg1, arg2) => {
    console.log(arg1);
    console.log(arg2);
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
          {splitPoints.map((point) => (
            <h1 key={point}>{secToString(point)}</h1>
          ))}
        </div>
        <div className='RoundScreenMobile__footer'>
          <StopWatchBrain
            splitPoints={splitPoints}
            setSplitPoints={setSplitPoints}
            setFinish={setFinish}
            numOfPoints={3}
            setSeconds={setSeconds}
            seconds={seconds}
          />
        </div>
      </section>
    </div>
  );
}

export default RoundScreenMobile;
