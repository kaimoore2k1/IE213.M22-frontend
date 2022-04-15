import "../../../sass/Intro/Intro.scss";
import React, {FC} from "react";
import {MemberProps} from "./type"

const IntroMember: FC<MemberProps> = ({nameMember,posMember, srcImg}) => {
    return(       
        <>
            <div className = "component-block">
                <div className = "block-img">
                    <img 
                        src={srcImg}
                        alt="Anh-thanh-vien" 
                    />
                </div>
                <div className = "block-divider">

                </div>
                <div className = "block-name">
                    <p className="name-heading">{nameMember}</p>
                    <p  className="name-des">{posMember}</p>
                </div>
            </div>
        </>
    )
}

export default IntroMember;