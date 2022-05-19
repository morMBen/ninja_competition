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
  buzzer_class,
  buzzer_text,
} from '../../utils/constants/content/stopWatchButtons';
function StopWatchButtons({
  handleStartStop,
  handleSplitReset,
  isRunning,
  isReset,
  isLastPoint,
}) {
  const [buttonsData, setButtonsData] = useState({
    startStopClass: start_class,
    startStopText: start_text,
    splitResetClass: off_class,
    splitResetText: off_text,
  });
  useEffect(() => {
    const bD = {};
    if (isRunning) {
      bD.startStopClass = stop_class;
      bD.startStopText = stop_text;
      if (isLastPoint) {
        bD.splitResetClass = buzzer_class;
        bD.splitResetText = buzzer_text;
      } else {
        bD.splitResetClass = split_class;
        bD.splitResetText = split_text;
      }
    } else {
      bD.startStopClass = start_class;
      bD.startStopText = start_text;
      if (isReset) {
        bD.splitResetClass = off_class;
        bD.splitResetText = off_text;
      } else {
        bD.splitResetClass = reset_class;
        bD.splitResetText = reset_text;
      }
    }
    setButtonsData(bD);
    //   {
    //   startStopClass: isRunning ? stop_class : start_class,
    //   startStopText: isRunning ? stop_text : start_text,
    //   splitResetClass: isRunning
    //     ? split_class
    //     : isReset
    //     ? off_class
    //     : reset_class,
    //   splitResetText: isRunning ? split_text : isReset ? off_text : reset_text,
    // }
  }, [isRunning, isReset, isLastPoint]);

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
