import React from 'react';
import './sass/App.scss';
import Contact from './modules/Home/Contact';
import Pay from './pages/Pay';
import Cmt from './components/core/Cmt';
import Hospital from './modules/Service/Hospital'
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">
      {/* <Contact /> */}
      {/* <Pay /> */}
      {/* <Cmt /> */}
      <Hospital/>
    </div>
  );
}

export default App;
