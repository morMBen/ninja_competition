import { useWindowSize } from './utils/useWindowSize';

function Test() {
  const [width, height] = useWindowSize();
  return (
    <span>
      Window size: {width} x {height}
    </span>
  );
}

export default Test;
