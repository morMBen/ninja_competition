import { useState } from 'react';
import Banner from '../../UI/banner/Banner';
import SmallHeading from '../../UI/smallHeading/SmallHeading';
import ClassicStopWatchButtons from '../../UI/stopWatchButtons/ClassicStopWatchButtons';
import TimerInterval from '../timerInterval/TimerInterval';
import XsHeading from '../../UI/xsHeading/XsHeading';

function ClassicStopWatchBrain({
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
      setFinish(splitPoints);
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
        <Banner>
          <SmallHeading text='אתה בטוח?' isRtl={true} />
          <>
            <button
              onClick={() => {
                restartTimer();
                setIsResetBannerOn(false);
              }}
            >
              כן
            </button>
            <button onClick={() => setIsResetBannerOn(false)}> לא</button>
          </>

          <XsHeading
            text='* אם תמחק את הנתונים לא תוכל לשחזר אותם בהמשך!'
            isRtl={true}
          />
        </Banner>
      )}
      {isOn && <TimerInterval setTime={setTime} fractionSpeed={50} />}
      <ClassicStopWatchButtons
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

export default ClassicStopWatchBrain;
