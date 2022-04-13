import React from 'react';
import './sass/App.scss';
import Contact from './modules/Home/Contact';
import Pay from './pages/Pay';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">
      <Contact />
      {/* <Pay /> */}
    </div>
  );
}

export default App;
