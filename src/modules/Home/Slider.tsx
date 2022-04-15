import { Carousel } from 'antd';
import Slider1 from "../../assets/images/slider1.png"
import Slider2 from "../../assets/images/slider2.png"
import Slider3 from "../../assets/images/slider3.png"
import Slider4 from "../../assets/images/slider4.png"
import Slider5 from "../../assets/images/slider5.png"
import "../../sass/Home/Home.scss"
const Slider = () => {
    return (
        <Carousel className='slider' autoplay >
            <div>
                <img src={Slider1} alt='Slider' />
            </div>
            <div>
                <img src={Slider2} alt='Slider' />
            </div>
            <div>
                <img src={Slider3} alt='Slider' />
            </div>
            <div>
                <img src={Slider4} alt='Slider' />
            </div>
            <div>
                <img src={Slider5} alt='Slider' />
            </div>
        </Carousel>
    )
}

export default Slider
