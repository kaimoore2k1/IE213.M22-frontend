import React from 'react';
import './sass/App.scss';
import Contact from './modules/Home/Contact';
import Login from './modules/Login-Logout/Login'
import Logout from './modules/Login-Logout/Logout'
import LoginLogout from './modules/Login-Logout/LoginLogout'
import ScrollToTop from './modules/Login-Logout/ScrollToTop'
import Intro from "./modules/GioiThieu/Intro"
import IntroMember from './modules/GioiThieu/IntroMember';
import IntroService from './modules/GioiThieu/IntroService';
import 'antd/dist/antd.min.css';
import Service from './modules/Home/Service';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <LoginLogout />
      <Service />
      
      
      
    </div>
  );
}

export default App;
