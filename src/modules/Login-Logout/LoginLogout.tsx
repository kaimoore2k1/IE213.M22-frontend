import { useState,useEffect, useRef } from "react";
import React from "react";
import "../../sass/Login-Logout/Login-Logout.scss";
import { Form, Input, Button, Typography } from "antd";
import {Login, Logout} from './components'


function LoginLogout(){
    const [clickChange, setClickChange] = useState<boolean>(true);


    let className = 'active'
    let idLogin = document.getElementById('loginRef');
    let idLogout = document.getElementById('logoutRef');

    if(clickChange === true){
        idLogin?.classList.add(className);
        idLogout?.classList.remove(className);
    }else{
        idLogout?.classList.add(className);
        idLogin?.classList.remove(className);
    }
    return(
        <>
            <div className="login-logout__wrapper">
                <div className="login-logout--login active"
                    id='loginRef'
                    onClick={() => setClickChange(true)}
                
                >
                    Đăng nhập
                </div>
            
                <div className="login-logout--logout"
                    id='logoutRef'
                    onClick={() => setClickChange(false)}
                >
                    Đăng ký
                </div>
            
            </div> 
            {clickChange === true ? 
            <Login /> :
            <Logout />
            }   
        </>
        
        
    )
}
export default LoginLogout;