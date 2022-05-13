import React, { useState, useEffect, useCallback, useRef } from 'react';
import { secToString } from '../../utils/ClockCalc';

function Timer() {
  //? Animation frame states
  const [timerAnimationFrame, setTimerAnimationFrame] = useState(null);
  const [counterAnimationFrame, setCounterAnimationFrame] = useState(null);
  //? The second of the beginning of the round
  const [startAt, setStartAt] = useState(null);
  //? Second per one round
  const [secondsPassed, setSecondsPassed] = useState(null);
  //? Array of all stages times
  const [points, setPoints] = useState([]);
  //? Fractions speed
  const [speed, setSpeed] = useState(15);
  let lastRenderedTime = useRef();

  const timer = useCallback(
    (currentTime, startingAt) => {
      setTimerAnimationFrame(
        window.requestAnimationFrame((e) => timer(e, startAt))
      );
      const secondSinceLastRender =
        (currentTime - lastRenderedTime.current) / 1000;
      if (secondSinceLastRender < 1 / speed) return;
      const sec = currentTime / 1000 - startingAt;
      setSecondsPassed(sec);
      lastRenderedTime.current = currentTime;
    },
    [lastRenderedTime, startAt, speed]
  );
  useEffect(() => {
    startAt && window.requestAnimationFrame(timer);
  }, [startAt, timer]);

  const setStarting = (currentTime) => {
    setStartAt((currentTime / 1000).toFixed(2));
  };
  const handleStart = () => {
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
    window.cancelAnimationFrame(timerAnimationFrame);
    window.cancelAnimationFrame(counterAnimationFrame);
    setSecondsPassed(null);
    setStartAt(null);
    setPoints([]);
  };
  return (
    <div>
      <button
        onClick={() => {
          !startAt && handleStart();
        }}
      >
        start
      </button>
      <button onClick={handleCount}>count</button>
      <button onClick={handleStop}>stop</button>
      <h5>seconds {secToString(secondsPassed)}</h5>
      <h5>
        points{' '}
        {points.map((e) => (
          <p key={e}>{e}</p>
        ))}
      </h5>
    </div>
  );
}

export default Timer;
