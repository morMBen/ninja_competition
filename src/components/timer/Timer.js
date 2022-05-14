import React, { useState, useEffect, useCallback, useRef } from 'react';
import { secToString } from '../../utils/ClockCalc';
import StopWatchButtons from '../../screens/rounde/StopWatchButtons';

function Timer({ fractionSpeed }) {
  //? Animation frame states
  const [timerAnimationFrame, setTimerAnimationFrame] = useState(null);
  const [counterAnimationFrame, setCounterAnimationFrame] = useState(null);
  //? The second of the beginning of the round
  const [startAt, setStartAt] = useState(null);
  const [stoppedAt, setStoppedAt] = useState(null);
  //? Second per one round
  const [secondsPassed, setSecondsPassed] = useState(null);
  //? Array of all stages times
  const [points, setPoints] = useState([]);
  //? Fractions speed
  let lastRenderedTime = useRef();

  const [isRunning, setIsRunning] = useState(false);
  const [isReset, setIsReset] = useState(true);

  const timer = useCallback(
    (currentTime) => {
      setTimerAnimationFrame(
        window.requestAnimationFrame((e) => timer(e, startAt))
      );
      const secondSinceLastRender =
        (currentTime - lastRenderedTime.current) / 1000;
      if (secondSinceLastRender < 1 / fractionSpeed) return;

      const sec = currentTime / 1000 - startAt;
      setSecondsPassed(sec);
      lastRenderedTime.current = currentTime;
    },
    [lastRenderedTime, startAt, fractionSpeed]
  );
  useEffect(() => {
    startAt && window.requestAnimationFrame(timer);
  }, [startAt, timer]);

  const setStarting = (currentTime) => {
    if (isReset) {
      setStartAt((currentTime / 1000).toFixed(2));
    } else {
      window.requestAnimationFrame(timer);
    }
  };
  const handleStart = () => {
    setSecondsPassed(null);
    setStartAt(null);
    setPoints([]);
    window.requestAnimationFrame(setStarting);
  };

  const countNewPoint = (currentTime) => {
    setPoints((prev) => [...prev, (currentTime / 1000 - startAt).toFixed(2)]);
  };
  const handleCount = () => {
    if (startAt !== null) {
      setCounterAnimationFrame(window.requestAnimationFrame(countNewPoint));
    }
  };
  const handleStop = () => {
    handleCount();
    window.cancelAnimationFrame(timerAnimationFrame);
    window.cancelAnimationFrame(counterAnimationFrame);
  };

  const handleStartStop = () => {
    !isRunning && handleStart();
    isRunning && handleStop();
    setIsRunning((prev) => !prev);
  };
  const handleSplitReset = () => {
    !isReset && setIsReset(true);
    isRunning && handleCount();
  };
  return (
    <>
      <button
        onClick={() => {
          !startAt && handleStart();
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          console.log(stoppedAt);
        }}
      >
        count
      </button>
      <button onClick={handleStop}>stop</button>
      <h5>seconds {secToString(secondsPassed)}</h5>
      <h5>
        points{' '}
        {points.map((e) => (
          <p key={e}>{e}</p>
        ))}
      </h5>
      <StopWatchButtons
        handleStartStop={handleStartStop}
        handleSplitReset={handleSplitReset}
        isRunning={isRunning}
        isReset={isReset}
      />
    </>
  );
}

export default Timer;
