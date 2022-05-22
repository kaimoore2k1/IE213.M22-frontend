import { Carousel } from 'antd';
// import Slider1 from "../../assets/images/slider1.png"
// import Slider2 from "../../assets/images/slider2.png"
// import Slider3 from "../../assets/images/slider3.png"
// import Slider4 from "../../assets/images/slider4.png"
// import Slider5 from "../../assets/images/slider5.png"
import "../../sass/Home/Home.scss"
const Slider = () => {
    return (
        <Carousel className='slider' autoplay >
            <div>
                <img src="https://cdn.senshop.tech/Banner/banner1.webp" alt='Slider' />
            </div>
            <div>
                <img src="https://cdn.senshop.tech/Banner/banner2.webp" alt='Slider' />
            </div>
            <div>
                <img src="https://cdn.senshop.tech/Banner/banner3.webp" alt='Slider' />
            </div>
            <div>
                <img src="https://cdn.senshop.tech/Banner/banner4.webp" alt='Slider' />
            </div>
            <div>
                <img src="https://cdn.senshop.tech/Banner/banner5.webp" alt='Slider' />
            </div>
        </Carousel>
    )
}

export default Slider
