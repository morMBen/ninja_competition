import React, { useState, useEffect, useCallback, useRef } from 'react';

function ToDelete() {
  let lastRenderedTime = useRef();
  let speed = useRef();
  const [timerAnimationFrame, setTimerAnimationFrame] = useState(null);
  const [counterAnimationFrame, setCounterAnimationFrame] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [startAt, setStartAt] = useState(null);
  const [points, setPoints] = useState([]);

  const secToTime = (s) => {
    const min = s >= 60 ? Math.floor(s / 60) : 0;
    const secAfter = (s - min * 60).toFixed(2);
    const secStr = secAfter >= 10 ? `${secAfter}` : `0${secAfter}`;
    return `${min}:${!Number(secStr) ? '00.00' : secStr}`;
  };
  const timer = useCallback(
    (currentTime, startingAt) => {
      setTimerAnimationFrame(
        window.requestAnimationFrame((e) => timer(e, startAt))
      );
      const secondSinceLastRender =
        (currentTime - lastRenderedTime.current) / 1000;
      if (secondSinceLastRender < 1 / speed.current) return;
      const sec = currentTime / 1000 - startingAt;
      setSeconds(sec);
      lastRenderedTime.current = currentTime;
    },
    [lastRenderedTime, speed, startAt]
  );
  useEffect(() => {
    speed.current = 10;
    startAt && window.requestAnimationFrame(timer);
  }, [startAt, timer]);

  const setStarting = (currentTime) => {
    setStartAt((currentTime / 1000).toFixed(2));
  };
  const start = () => {
    window.requestAnimationFrame(setStarting);
  };

  const setCounting = (currentTime) => {
    setPoints((prev) => [...prev, (currentTime / 1000 - startAt).toFixed(2)]);
  };
  const count = () => {
    setCounterAnimationFrame(window.requestAnimationFrame(setCounting));
  };
  const stop = () => {
    window.cancelAnimationFrame(timerAnimationFrame);
    window.cancelAnimationFrame(counterAnimationFrame);
    setSeconds(null);
    setStartAt(null);
    setPoints([]);
    lastRenderedTime.current = 0;
  };
  return (
    <div>
      <button
        onClick={() => {
          !startAt && start();
        }}
      >
        start
      </button>
      <button onClick={count}>count</button>
      <button onClick={stop}>stop</button>
      <h5>seconds {secToTime(seconds)}</h5>
      <h5>
        points{' '}
        {points.map((e) => (
          <p key={e}>{e}</p>
        ))}
      </h5>
    </div>
  );
}

export default ToDelete;
