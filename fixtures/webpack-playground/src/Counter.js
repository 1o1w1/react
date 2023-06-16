import React, {useState, useCallback} from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const add = useCallback(function add() {
    setCount(c => c + 1);
  }, [setCount]);

  return <button key={'Counter_div'} onClick={add}>{count}</button>;
};
