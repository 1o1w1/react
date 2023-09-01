import React, {memo, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
// import {Counter} from './Counter';
// import FiberDemoFc from './FiberDemo/FiberDemoFc';

const Temp = memo(function Inner({num}) {
  useEffect(() => {
    console.log('qinduanyu');
  });

  return <div key={'Temp_div'} >1111{num}</div>;
});

function Root() {
  const [num, setNum] = useState(0);

  const TempWrap = () => {
    debugger;

    <Temp key={'Temp'} num={0} />;
  };

  useEffect(() => {
    setInterval(() => {
      setNum(n => n + 1);
    }, 1000);
  }, []);
  return (
      <TempWrap key="TempWrap" />
  );
}


function Playground() {
    return   <Root key={'Root'} />

}

export default Playground;
