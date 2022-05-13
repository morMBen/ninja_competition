import { Fragment } from 'react';

function CompPath({
  stepsData,
  svgTemplate: { coordinates, paths, pathViewBox, pathTransform },
  numOfSteps,
  nowOnStepNum,
}) {
  const insertSvgData = (data, stepsCoordinates, now, numberOfSteps) => {
    const stepsAfterSorting = fixStepsOrder(stepsCoordinates, numberOfSteps);
    return (
      <svg
        style={{ maxWidth: '90vw', maxHeight: '90vh', margin: '1.5rem' }}
        id='eMIbA9hUtjS1'
        viewBox={pathViewBox}
        xmlns='http://www.w3.org/1999/xhtml'
        shapeRendering='geometricPrecision'
        textRendering='geometricPrecision'
      >
        {insertPathForSvg(stepsAfterSorting, now)}
        {stepsAfterSorting.map((e, index) =>
          insertForeignObjectForSvg(data[index], e.x, e.y)
        )}
      </svg>
    );
  };

  const insertPathForSvg = (stepsAfterSorting, now) => {
    return paths.map((e, i) => {
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
            className={isBlink(stepsAfterSorting, now, i) ? 'blink_me' : ''}
            stroke={
              isPathPassed(stepsAfterSorting, now, i) ? '#EE0101' : '#010E5D'
            }
            strokeWidth='3'
          />
        </Fragment>
      );
    });
  };

  const insertForeignObjectForSvg = (dataToStep, x, y) => {
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
            display: 'flex',
            width: '100%',
            alignItems: 'end',
            height: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: '#355AC8',
              width: '100%',
              textAlign: 'center',
              lineHeight: '1.3',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.7px',
              borderTop: 'solid 2px #010E5D',
              color: 'white',
            }}
          >
            {dataToStep}
          </div>
        </div>
      </foreignObject>
    );
  };

  const fixStepsOrder = (stepsCoordinates, numberOfSteps) => {
    const newData = stepsCoordinates
      .slice(0, numberOfSteps)
      .sort((a, b) => a.stepNum - b.stepNum);
    return newData;
  };

  const isPathPassed = (stepsAfterSorting, now, index) => {
    const startingPoint = stepsAfterSorting[numOfSteps - 1].stepNum;
    const endingPoint = now !== 0 && stepsAfterSorting[now - 1].stepNum;
    const endLargerThenI = endingPoint > index;
    const startSmallerOrEqualToI = startingPoint <= index;
    return now !== 0 && (endLargerThenI || startSmallerOrEqualToI);
  };

  const isBlink = (stepsAfterSorting, now, index) => {
    if (now === stepsAfterSorting.length) return;
    const startingPoint = stepsAfterSorting[numOfSteps - 1].stepNum;
    const endingPoint = now !== 0 && stepsAfterSorting[now - 1].stepNum;
    if (now === 0) {
      return (
        !(stepsAfterSorting[now].stepNum < index + 1) ||
        startingPoint - 1 < index
      );
    }
    return endingPoint <= index && index < stepsAfterSorting[now].stepNum;
  };

  return <>{insertSvgData(stepsData, coordinates, nowOnStepNum, numOfSteps)}</>;
}

export default CompPath;
