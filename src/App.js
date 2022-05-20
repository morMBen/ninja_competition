// import React, { useEffect, useState } from 'react';
// import { useWindowSize } from './utils/useWindowSize';
// import { getSvgTemplate } from './utils/constants/pathSvg/svgTemplate';
// import CompPath from './components/compPath/CompPath';
// import { stepsData } from './utils/constants/stepsFakeData';
import RoundScreenMobile from './screens/rounde/RoundScreen.mobile';

// import StopWatchBrain from './components/stopWatch/StopWatchBrain';
import './App.css';
const appHeight = () => {
  document.documentElement.style.setProperty(
    '--app-height',
    `${window.innerHeight}px`
  );
};
window.addEventListener('resize', appHeight);
appHeight();
function App() {
  // const [width, height] = useWindowSize();

  return (
    <>
      {/* <CompPath
        svgTemplate={getSvgTemplate(width < height ? 0 : 1)}
        stepsData={stepsData}
        numOfSteps={14}
        nowOnStepNum={2}
      /> */}
      <RoundScreenMobile numOfPoints={4} />
    </>
  );
}

export default App;
