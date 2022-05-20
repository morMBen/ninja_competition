// import React, { useEffect, useState } from 'react';
// import { useWindowSize } from './utils/useWindowSize';
// import { getSvgTemplate } from './utils/constants/pathSvg/svgTemplate';
// import CompPath from './components/compPath/CompPath';
// import { stepsData } from './utils/constants/stepsFakeData';
import RoundScreenMobile from './screens/rounde/RoundScreen.mobile';

// import StopWatchBrain from './components/stopWatch/StopWatchBrain';

function hideAddressBar() {
  if (!window.location.hash) {
    if (document.height < window.outerHeight) {
      document.body.style.height = window.outerHeight + 50 + 'px';
    }

    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 50);
  }
}

window.addEventListener('load', function () {
  if (!window.pageYOffset) {
    hideAddressBar();
  }
});
window.addEventListener('orientationchange', hideAddressBar);
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
