import React, {useState, useEffect} from 'react';
import {FaAngleUp} from 'react-icons/fa';
import { BackTop } from 'antd';
import "../../sass/Login-Logout/Login-Logout.scss";
function ScrollToTop(){
    // const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
    // useEffect(() =>{
    //     window.addEventListener('scroll', ()=>{
    //         if(window.scrollY > 300){
    //             setShowScrollToTop(true)
    //         }
    //         else{
    //             setShowScrollToTop(false)
    //         }
    //     })
        
    // }, []);
    // const scrollTop = () => {
    //     window.scrollTo({
    //         top:0,
    //         behavior: 'smooth'
    //     })
    // };
    
    return(
        <>
        <BackTop>
            <div ><FaAngleUp  className="scrollTop-position scrollTop-style"/></div>
        </BackTop>
        </>
        
    )
}


export default ScrollToTop;