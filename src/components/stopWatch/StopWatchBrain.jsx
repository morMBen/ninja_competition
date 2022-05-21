import { useState } from 'react';
import StopWatchButtons from './StopWatchButtons';
import TimerInterval from './TimerInterval';
import Banner from '../UI/banner/Banner';

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
  const [isResetBannerOn, setIsResetBannerOn] = useState(false);

  const setTime = (sec) => {
    const currentTime = Number(sec) + Number(pauseOn);
    setSeconds(currentTime);
  };

  const pauseTimer = () => {
    setPauseOn(seconds);
  };
  const restartTimer = () => {
    setIsReset(true);
    setSplitPoints([]);
    setPauseOn(0);
    setSeconds(0);
    setIsOn(false);
  };
  const handleStartStop = () => {
    //? all points passed
    if (splitPoints.length === numOfPoints) {
    } else {
      if (isOn) {
        pauseTimer();
      } else {
        setIsReset(false);
      }
      setIsOn((prev) => !prev);
    }
  };
  const handleSplitReset = () => {
    if (isOn) {
      if (splitPoints.length + 1 === numOfPoints) {
        setPauseOn(seconds);
        setIsOn((prev) => !prev);
      }
      setSplitPoints((prev) => [...prev, seconds]);
    } else {
      setIsResetBannerOn(true);
    }
  };

  return (
    <>
      {isResetBannerOn && (
        <Banner
          setYes={() => {
            restartTimer();
            setIsResetBannerOn(false);
          }}
          setNo={() => setIsResetBannerOn(false)}
        />
      )}
      {isOn && <TimerInterval setTime={setTime} fractionSpeed={50} />}
      <StopWatchButtons
        handleStartStop={handleStartStop}
        handleSplitReset={handleSplitReset}
        isRunning={isOn}
        isReset={isReset}
        isLastPoint={numOfPoints <= splitPoints.length + 1}
        isEnd={splitPoints.length === numOfPoints}
      />
    </>
  );
}

export default StopWatchBrain;
