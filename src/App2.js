import { useState, Fragment } from 'react';

const coordinates = [
  { stepNum: 1, x: '40', y: '10' },
  { stepNum: 9, x: '605', y: '300' },
  { stepNum: 12, x: '200', y: '285' },
  { stepNum: 5, x: '560', y: '10' },
  { stepNum: 4, x: '295', y: '105' },
  { stepNum: 14, x: '0', y: '280' },
  { stepNum: 11, x: '390', y: '195' },
  { stepNum: 7, x: '615', y: '140' },
  { stepNum: 10, x: '410', y: '295' },
  { stepNum: 15, x: '115', y: '165' },
  { stepNum: 3, x: '360', y: '0' },
  { stepNum: 13, x: '275', y: '185' },
  { stepNum: 8, x: '515', y: '210' },
  { stepNum: 2, x: '185', y: '80' },
  { stepNum: 6, x: '480', y: '105' },
];
const paths = [
  {
    pathNum: 1,
    d: 'M64.139746,160.49221c4.473396,2.255283,35.927387-4.211865,52.693927-4.211865',
  },
  {
    pathNum: 2,
    d: 'M64.139746,160.49221c-6.69139-3.406173,11.927041-12.373836,9.08859-23.379029',
    transform: 'matrix(1.989898 0 0 5.278944-58.843676-252.053187)',
  },
  {
    pathNum: 3,
    d: 'M49.165874,111.273158c-8.548437,3.580595,23.299876,22.741118,24.062461,25.840023',
  },
  {
    pathNum: 4,
    d: 'M88.379747,109.475218c-7.739747,4.572814-28.490323-2.556732-39.213874,1.797941',
  },
  {
    pathNum: 5,
    d: 'M88.379747,109.475218c10.547101-6.341767-41.249616-36.019446-28.490322-37.67881',
  },
  {
    pathNum: 6,
    d: 'M86.567248,74.69552c-7.681622,1.070631-17.432769-4.029792-26.677823-2.899112',
  },
  {
    pathNum: 7,
    d: 'M116.833673,58.685019c-9.502828,0-10.595833,12.946886-30.266423,16.0105',
  },
  {
    pathNum: 8,
    d: 'M116.833673,58.685019c11.500211,0,11.500211,10.156745,23.000422,10.156742',
  },
  {
    pathNum: 9,
    d: 'M191.262869,62.895152c-7.883067-2.938573-30.477321,5.995422-51.428774,5.946609',
  },
  {
    pathNum: 10,
    d: 'M194.730232,86.622533c.027416-14.82612,6.301742-19.932265-3.467362-23.727378',
  },
  {
    pathNum: 11,
    d: 'M194.730232,86.622533c-.000001,6.478593-34.352415-5.871696-36.892797,4.013279',
  },
  {
    pathNum: 12,
    d: 'M191.262869,127.264897c7.146403-5.481725-38.429419-16.890709-33.425434-36.629085',
  },
  {
    pathNum: 13,
    d: 'M191.262869,127.253989c-5.139079,4.16656-30.477322-3.060816-36.894007-.849573',
  },
  {
    pathNum: 14,
    d: 'M183.379802,169.140468c27.105195-6.413344-45.424994-35.687736-29.01094-42.736052',
  },
  {
    pathNum: 15,
    d: 'M183.379802,169.140468c-8.332894,1.964207-45.828386-12.860123-66.546129-12.860123',
  },
];
const stepsData = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
];
function App() {
  const [numOfSteps, setNumOfSteps] = useState(15);
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
        viewBox='0 0 700 360'
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
            transform='matrix(0 1.989898-5.278944 0 951.427247-63.573018)'
            fill='none'
            stroke='#355AC8'
            strokeWidth='5'
          />
          <path
            d={e.d}
            transform='matrix(0 1.989898-5.278944 0 951.427247-63.573018)'
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
              fontWeight: 'bold',
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

  return <>{insertSvgData(stepsData, coordinates)}</>;
}

export default App;
