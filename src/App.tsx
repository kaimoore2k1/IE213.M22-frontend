import React from 'react';
import './sass/App.scss';
import Contact from './modules/Home/Contact';
import Pay from './pages/Pay';
import 'antd/dist/antd.min.css';
import Detail from './pages/Detail';
import Example from './modules/Detail/Example';
import File from './modules/Detail/File';
function App() {
  return (
    <div className="App">
      {/* <Contact /> */}
      {/* <Pay /> */}
      <Detail/>
      {/* <Example /> */}
      {/* <File/> */}
    </div>
  );
}

export default App;
