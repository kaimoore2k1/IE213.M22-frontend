import avatar from "../assets/avatar.jpg"
import "../../sass/Intro/Intro.scss";
import React, {FC} from "react";

interface MemberProps{
    nameMember: string;
    posMember: string; 
    srcImg: string;
}

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