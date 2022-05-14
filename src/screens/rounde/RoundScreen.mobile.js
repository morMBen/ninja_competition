import { useState } from 'react';
import Timer from '../../components/timer/Timer';
import './style.css';

function RoundScreenMobile() {
  const [isRunning, setIsRunning] = useState(false);
  const [isReset, setIsReset] = useState(true);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
    setIsReset(false);
  };
  const handleSplitReset = () => {
    !isReset && setIsReset(true);
  };
  return (
    <div className='RoundScreenMobile'>
      <section className='RoundScreenMobile__section'>
        <div className='RoundScreenMobile__head '></div>
        <div className='RoundScreenMobile__scores'></div>
        <div className='RoundScreenMobile__footer'>
          <Timer
            fractionSpeed={15}
            isRunning={isRunning}
            isReset={isReset}
            handleStartStop={handleStartStop}
            handleSplitReset={handleSplitReset}
          />
        </div>
      </section>
    </div>
  );
}

export default RoundScreenMobile;
