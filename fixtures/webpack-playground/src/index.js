import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from "./Counter";
import FiberDemoFc from "./FiberDemo/FiberDemoFc";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FiberDemoFc key={'FiberDemoFc'} />
  // <React.StrictMode key={'StrictMode'}>
  //   <App key={'App'} />
  // </React.StrictMode>
);
