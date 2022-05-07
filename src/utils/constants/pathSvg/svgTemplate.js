import { pathOfSvg } from './pathOfSvg';
import { foreignObjectCoordinates } from './foreignObjectCoordinates';

export const getSvgTemplate = (index) => {
  return {
    coordinates: foreignObjectCoordinates[index].coordinates,
    paths: pathOfSvg[index].paths,
    pathViewBox: pathOfSvg[index].pathViewBox,
    pathTransform: pathOfSvg[index].pathTransform,
  };
};
