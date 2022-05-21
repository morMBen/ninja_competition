import React from 'react';
import './style.css';
import { secToString } from '../../utils/ClockCalc';
function ScoreTable({ points, pointName, isLastTable }) {
  const insertPoints = () => {
    return pointName.map((point, index) => {
      return points[index] ? (
        <div key={point} className='score-table__row'>
          <div
            className={`score-table__row-line ${
              isLastTable && pointName.length === index + 1
                ? 'score-table__row-line--end'
                : ''
            }`}
          >
            <p>{points[index] ? secToString(points[index]) : '--:--:--'}</p>
            <p>{point}</p>
          </div>
        </div>
      ) : null;
    });
  };

  return <div className='score-table'>{insertPoints()}</div>;
}

export default ScoreTable;
