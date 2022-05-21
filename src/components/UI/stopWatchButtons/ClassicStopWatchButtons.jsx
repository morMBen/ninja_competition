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
  continue_class,
  continue_text,
  end_class,
  end_text,
} from '../../../utils/constants/content/stopWatchButtons';
import './style.css';
function ClassicStopWatchButtons({
  handleStartStop,
  handleSplitReset,
  isRunning,
  isReset,
  isLastPoint,
  isEnd,
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
      if (isReset) {
        bD.startStopClass = start_class;
        bD.startStopText = start_text;
        bD.splitResetClass = off_class;
        bD.splitResetText = off_text;
      } else {
        if (isEnd) {
          bD.startStopClass = end_class;
          bD.startStopText = end_text;
        } else {
          bD.startStopClass = continue_class;
          bD.startStopText = continue_text;
        }
        bD.splitResetClass = reset_class;
        bD.splitResetText = reset_text;
      }
    }
    setButtonsData(bD);
  }, [isRunning, isReset, isLastPoint, isEnd]);

  return (
    <>
      <button
        onClick={handleSplitReset}
        className={`stopwatch-button ${buttonsData.splitResetClass}`}
      >
        {buttonsData.splitResetText}
      </button>
      <button
        onClick={handleStartStop}
        className={`stopwatch-button ${buttonsData.startStopClass}`}
      >
        {buttonsData.startStopText}
      </button>
    </>
  );
}

export default ClassicStopWatchButtons;
