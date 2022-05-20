import { useState } from 'react';
import StopWatchButtons from './StopWatchButtons';
import TimerInterval from './TimerInterval';

function StopWatchBrain({
  numOfPoints,
  setFinish,
  splitPoints,
  setSplitPoints,
  setSeconds,
  seconds,
}) {
  const [isOn, setIsOn] = useState(false);
  const [isReset, setIsReset] = useState(true);
  const [pauseOn, setPauseOn] = useState(0);

  const setTime = (sec) => {
    const currentTime = Number(sec) + Number(pauseOn);
    setSeconds(currentTime);
    // console.log(currentTime);
  };

  const pauseTimer = () => {
    setPauseOn(seconds);
  };
  const restartTimer = () => {
    setSplitPoints([]);
    setPauseOn(0);
    setSeconds(0);
    setIsOn(false);
  };
  const handleStartStop = () => {
    if (isOn) {
      pauseTimer();
    } else {
      setIsReset(false);
    }
    setIsOn((prev) => !prev);
  };
  const handleSplitReset = () => {
    if (isOn) {
      if (splitPoints.length + 1 === numOfPoints) {
        setPauseOn(seconds);
        setIsOn((prev) => !prev);
      }
      setSplitPoints((prev) => [...prev, seconds]);
    } else {
      restartTimer();
    }
  };
  return (
    <>
      {isOn && <TimerInterval setTime={setTime} fractionSpeed={50} />}
      <StopWatchButtons
        handleStartStop={handleStartStop}
        handleSplitReset={handleSplitReset}
        isRunning={isOn}
        isReset={isReset}
        isLastPoint={numOfPoints <= splitPoints.length + 1}
      />
    </>
  );
}

export default StopWatchBrain;
