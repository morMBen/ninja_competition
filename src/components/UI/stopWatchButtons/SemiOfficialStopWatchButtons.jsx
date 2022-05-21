import { useState, useEffect } from 'react';
import {
  start_class,
  start_text,
  stop_class,
  stop_text,
  passed_class,
  passed_text,
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
  fell_class,
  fell_text,
} from '../../../utils/constants/content/stopWatchButtons';
function SemiOfficialStopWatchButtons({
  handleFellReset,
  handleStartStop,
  handlePassedBuzzer,
  isRunning,
  isReset,
  isLastPoint,
  isEnd,
}) {
  const [buttonsData, setButtonsData] = useState({
    startStopClass: start_class,
    startStopText: start_text,
    passedBuzzerClass: off_class,
    passedBuzzerText: off_text,
    fellResetClass: off_text,
    fellResetText: off_text,
  });
  useEffect(() => {
    const bD = {};
    if (isRunning) {
      bD.startStopClass = stop_class;
      bD.startStopText = stop_text;
      if (isLastPoint) {
        bD.passedBuzzerClass = buzzer_class;
        bD.passedBuzzerText = buzzer_text;
        bD.fellResetClass = fell_class;
        bD.fellResetText = fell_text;
      } else {
        bD.passedBuzzerClass = passed_class;
        bD.passedBuzzerText = passed_text;
        bD.fellResetClass = fell_class;
        bD.fellResetText = fell_text;
      }
    } else {
      if (isReset) {
        bD.startStopClass = start_class;
        bD.startStopText = start_text;
        bD.passedBuzzerClass = off_class;
        bD.passedBuzzerText = off_text;
        bD.fellResetClass = off_class;
        bD.fellResetText = off_text;
      } else {
        if (isEnd) {
          bD.startStopClass = end_class;
          bD.startStopText = end_text;
        } else {
          bD.startStopClass = continue_class;
          bD.startStopText = continue_text;
        }
        bD.passedBuzzerClass = off_class;
        bD.passedBuzzerText = off_text;
        bD.fellResetClass = reset_class;
        bD.fellResetText = reset_text;
      }
    }
    setButtonsData(bD);
  }, [isRunning, isReset, isLastPoint, isEnd]);

  return (
    <>
      {!isReset && (
        <button
          style={isEnd ? { transform: 'scale(0.7)' } : null}
          onClick={handleFellReset}
          className={`stopwatch-button ${buttonsData.fellResetClass}`}
        >
          {buttonsData.fellResetText}
        </button>
      )}
      <button
        style={!isEnd ? { transform: 'scale(0.7)' } : null}
        onClick={handleStartStop}
        className={`stopwatch-button ${buttonsData.startStopClass}`}
      >
        {buttonsData.startStopText}
      </button>
      {!isReset && (
        <button
          style={
            isEnd
              ? {
                  transform: 'scale(0.6)',
                  backgroundColor: 'transparent',
                  border: 'none',
                }
              : null
          }
          onClick={handlePassedBuzzer}
          className={`stopwatch-button ${buttonsData.passedBuzzerClass}`}
        >
          {buttonsData.passedBuzzerText}
        </button>
      )}
    </>
  );
}

export default SemiOfficialStopWatchButtons;
