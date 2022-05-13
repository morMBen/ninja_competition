import React, { useEffect } from 'react';
import { useWindowSize } from './utils/useWindowSize';
import { getSvgTemplate } from './utils/constants/pathSvg/svgTemplate';
import CompPath from './components/compPath/CompPath';
import { stepsData } from './utils/constants/stepsFakeData';
import RoundScreenMobile from './screens/rounde/RoundScreen.mobile';
function App() {
  const [width, height] = useWindowSize();
  useEffect(() => {});
  return (
    <>
      {/* <CompPath
        svgTemplate={getSvgTemplate(width < height ? 0 : 1)}
        stepsData={stepsData}
        numOfSteps={14}
        nowOnStepNum={2}
      /> */}
      <RoundScreenMobile />
    </>
  );
}

export default App;
