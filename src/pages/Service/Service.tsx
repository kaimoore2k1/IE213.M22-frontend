import { Link } from "react-router-dom"
import { Content } from "./Content"

export interface content {
    path: string;
    className: string;
    img: {
        src: string;
        alt: string;
    };
    content: {
        h2: string;
        p: string;
    };
}

function Service() {
    return (
        <>
            {

                Content.map((content, index) =>
                (<Link key={index} to={content.path}>
                    <div className={content.className}>
                        <img src={content.img.src} alt={content.img.alt} />
                        <div className="main-content">
                            <h2>{content.content.h2}</h2>
                            <p>{content.content.p}</p>
                        </div>
                        <span>Bấm vào xem chi tiết</span>
                    </div>
                </Link>)
                )
            }

        </>

    )
}

export default Service