import React, { useEffect } from 'react';
import { useWindowSize } from './utils/useWindowSize';
import { getSvgTemplate } from './utils/constants/pathSvg/svgTemplate';
import CompPath from './components/CompPath';
import { stepsData } from './utils/constants/stepsFakeData';

function App() {
  const [width, height] = useWindowSize();
  useEffect(() => {});
  return (
    <div>
      <CompPath
        svgTemplate={getSvgTemplate(width < height ? 0 : 1)}
        stepsData={stepsData}
        numOfSteps={5}
        nowOnStepNum={3}
      />
    </div>
  );
}

export default App;
