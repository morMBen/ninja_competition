import React, { useState, useEffect } from 'react';

function ToDelete() {
  let lastRenderedTime = 0;
  let speed = 15;
  const [brr, setBrr] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [startAt, setStartAt] = useState(null);
  const [points, setPoints] = useState([]);

  const timer = (currentTime) => {
    setBrr(window.requestAnimationFrame(timer));
    const secondSinceLastRender = (currentTime - lastRenderedTime) / 1000;
    if (secondSinceLastRender < 1 / speed) return;

    setSeconds((currentTime / 1000 - startAt).toFixed(2));
    lastRenderedTime = currentTime;
  };
  useEffect(() => {
    startAt && window.requestAnimationFrame(timer);
  }, [startAt]);

  const setStarting = (currentTime) => {
    setStartAt((currentTime / 1000).toFixed(2));
  };
  const start = () => {
    window.requestAnimationFrame(setStarting);
  };

  const count = (currentTime) => {
    setPoints((prev) => [...prev, (currentTime / 1000 - startAt).toFixed(3)]);
    // console.log(seconds);
  };
  const stop = () => {
    window.cancelAnimationFrame(brr);
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
      <button onClick={() => window.requestAnimationFrame(count)}>count</button>
      <button onClick={stop}>stop</button>
      <h5>start At {startAt}</h5>
      <h5>seconds {seconds}</h5>
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
