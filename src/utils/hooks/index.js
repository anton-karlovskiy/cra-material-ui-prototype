
import { useState } from 'react';

const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  return () => setValue(value => ++value);
};

export {
  useForceUpdate
};
