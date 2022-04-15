import { FaThumbsUp } from "react-icons/fa";
import "../../sass/Intro/Intro.scss";
import React, {FC} from "react";

interface ServiceProps{
    serTitle: string;
    serDes: string;
}
const IntroService:FC<ServiceProps> = ({serTitle, serDes}) => {
    return(
        <>

            <div className="service-block">
                <FaThumbsUp className ="service-icon"/>
                <p className ="service-title">{serTitle}</p>
                <p className="service-des">{serDes}
                </p>
            </div>
        </>
    )
}

export default IntroService;