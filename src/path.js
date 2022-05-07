import { useState, Fragment } from 'react';
import { getSvgTemplate } from './utils/constants/pathSvg/svgTemplate';
import { useWindowSize } from './utils/useWindowSize';
import { stepsData } from './utils/constants/stepsFakeData';

function Path() {
  const [width, height] = useWindowSize();
  const { coordinates, paths, pathViewBox, pathTransform } = getSvgTemplate(
    width < height ? 0 : 1
  );
  const [numOfSteps, setNumOfSteps] = useState(12);
  const [now, setNow] = useState(4); //! must be smaller or equal to numOfSteps

  const fixSteps = (stepsCoordinates) => {
    const newData = stepsCoordinates
      .slice(0, numOfSteps)
      .sort((a, b) => a.stepNum - b.stepNum);
    return newData;
  };
  const insertSvgData = (data, stepsCoordinates) => {
    const stepsAfterSorting = fixSteps(stepsCoordinates);
    return (
      <svg
        style={{ maxWidth: '90vw', maxHeight: '90vh', margin: '1.5rem' }}
        id='eMIbA9hUtjS1'
        viewBox={pathViewBox}
        xmlns='http://www.w3.org/1999/xhtml'
        shapeRendering='geometricPrecision'
        textRendering='geometricPrecision'
      >
        {path(stepsAfterSorting)}
        {stepsAfterSorting.map((e, index) => step(data[index], e.x, e.y))}
      </svg>
    );
  };

  const path = (stepsAfterSorting) => {
    const startingPoint = stepsAfterSorting[numOfSteps - 1].stepNum;
    const endingPoint = now !== 0 && stepsAfterSorting[now - 1].stepNum;
    return paths.map((e, i) => {
      const endLargerThenI = endingPoint > i;
      const startSmallerOrEqualToI = startingPoint <= i;
      return (
        <Fragment key={e.d}>
          <path
            d={e.d}
            transform={pathTransform}
            fill='none'
            stroke='#355AC8'
            strokeWidth='5'
          />
          <path
            d={e.d}
            transform={pathTransform}
            fill='none'
            stroke={
              now !== 0 && (endLargerThenI || startSmallerOrEqualToI)
                ? '#EE0101'
                : '#010E5D'
            }
            strokeWidth='3'
          />
        </Fragment>
      );
    });
  };
  const step = (dataToStep, x, y) => {
    return (
      <foreignObject
        key={dataToStep}
        className='node'
        x={x}
        y={y}
        width='85'
        height='60'
      >
        <div
          style={{
            maxWidth: '1.5rem',
            padding: '0 0.5rem 0.4rem 0',
            borderRight: '1px solid black',
            borderBottom: '2px solid black',
            borderRadius: '0 0 50px 0 ',
            backgroundColor: 'white',
          }}
        >
          <div
            style={{ fontWeight: 700, fontSize: '18px', textAlign: 'center' }}
          >
            {dataToStep}
          </div>
        </div>
      </foreignObject>
    );
  };

  return <>{insertSvgData(stepsData, coordinates)}</>;
}

export default Path;
