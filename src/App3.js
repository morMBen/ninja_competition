// import React, { useEffect, useState } from 'react';
// import { useWindowSize } from './utils/useWindowSize';
// import { getSvgTemplate } from './utils/constants/pathSvg/svgTemplate';
// import CompPath from './components/compPath/CompPath';
// import { stepsData } from './utils/constants/stepsFakeData';

import HomePageMobile from './screens/homePage/HomePageMobile';
// import StopWatchBrain from './components/stopWatch/StopWatchBrain';

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
      <HomePageMobile />
      {/* <RoundScreenMobile numOfPoints={14} competitorName={'דני דנינו'} /> */}
    </>
  );
}

export default App;
