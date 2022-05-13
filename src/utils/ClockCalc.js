export const secToString = (s) => {
  const min = s >= 60 ? Math.floor(s / 60) : 0;
  const secAfter = (s - min * 60).toFixed(2);
  const secStr = secAfter >= 10 ? `${secAfter}` : `0${secAfter}`;
  const minStr = min >= 10 ? `${min}` : `0${min}`;
  return `${minStr}:${!Number(secStr) ? '00.00' : secStr}`;
};
