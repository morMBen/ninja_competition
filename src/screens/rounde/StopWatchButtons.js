import { useState, useEffect } from 'react';
import {
  start_class,
  start_text,
  stop_class,
  stop_text,
  split_class,
  split_text,
  reset_class,
  reset_text,
  off_class,
  off_text,
} from '../../utils/constants/content/stopWatchButtons';
function StopWatchButtons({
  handleStartStop,
  handleSplitReset,
  isRunning,
  isReset,
}) {
  const [buttonsData, setButtonsData] = useState({
    startStopClass: start_class,
    startStopText: start_text,
    splitResetClass: off_class,
    splitResetText: off_text,
  });
  useEffect(() => {
    setButtonsData({
      startStopClass: isRunning ? stop_class : start_class,
      startStopText: isRunning ? stop_text : start_text,
      splitResetClass: isRunning
        ? split_class
        : isReset
        ? off_class
        : reset_class,
      splitResetText: isRunning ? split_text : isReset ? off_text : reset_text,
    });
  }, [isRunning, isReset]);

  return (
    <>
      <button
        onClick={handleStartStop}
        className={`stopwatch-button ${buttonsData.startStopClass}`}
      >
        {buttonsData.startStopText}
      </button>
      <button
        onClick={handleSplitReset}
        className={`stopwatch-button ${buttonsData.splitResetClass}`}
      >
        {buttonsData.splitResetText}
      </button>
    </>
  );
}

export default StopWatchButtons;
