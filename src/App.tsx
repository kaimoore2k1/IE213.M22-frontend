import React from 'react';
import './sass/App.scss';
import 'antd/dist/antd.min.css';
import Contact from './modules/Home/Contact';
import Login from './modules/Login-Logout/components/Login'
import Logout from './modules/Login-Logout/components/Logout'
import LoginLogout from './modules/Login-Logout/LoginLogout'
import ScrollToTop from './components/core/ScrollToTop'
import Intro from "./pages/Introduce/Intro"
import IntroMember from './pages/Introduce/components/IntroMember';
import IntroService from './pages/Introduce/components/IntroService';

import Service from './modules/Home/Service';

function App() {
  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      {/* <LoginLogout /> */}
      {/* <Intro/> */}
      {/* Service /> */}
    </div>
  );
}

export default App;
