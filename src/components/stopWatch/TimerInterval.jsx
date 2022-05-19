import { useEffect, useRef } from 'react';

function TimerInterval({ setTime, fractionSpeed }) {
  const start = useRef();
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      if (!start.current) {
        start.current = new Date();
      }
      setTime((new Date() - start.current) / 1000);
    }, fractionSpeed);
    return () => {
      clearInterval(interval.current);
    };
  }, [fractionSpeed, setTime]);
  return <></>;
}

export default TimerInterval;
