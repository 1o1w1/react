import React, {useState, useTransition, useEffect} from 'react';
const LargeComponent = ({id, count}) => {
  let i = 0;
  while (i) {
    i--;
  }

  return <div key={`LargeComponent${id}_div`}>LargeComponent,{count}</div>;
};

const FiberDemoFc = () => {
  const [state, setState] = useState(0);
  const [isPending, startTransition] = useTransition();
  function setStateAdd1() {
    setState(num => num + 1);
  }
  function startTransitionAdd1() {
    startTransition(() => {
      setStateAdd1();
    });
  }
  function multiAdd(params) {
    startTransitionAdd1();
    setTimeout(() => {
      setStateAdd1();
    }, 1000);
  }
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(i);
  }
  useEffect(() => {}, []);
  return (
    <div key={'FiberDemoFc_div'}>
      <button onClick={setStateAdd1}>setState</button>
      <button onClick={startTransitionAdd1}>startTransition</button>
      <button onClick={multiAdd}>setState+startTransition</button>
      {arr.map(id => (
        <LargeComponent key={`LargeComponent${id}`} id={id} count={state} />
      ))}
    </div>
  );
};

export default FiberDemoFc;
