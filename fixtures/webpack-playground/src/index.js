import React, {memo, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
// import {Counter} from './Counter';
// import FiberDemoFc from './FiberDemo/FiberDemoFc';
import Playground from "./Playground";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Playground key={'Playground'} />
  // <FiberDemoFc key={'FiberDemoFc'} />
  // <React.StrictMode key={'StrictMode'}>
  //   <App key={'App'} />
  // </React.StrictMode>
);
