import React, { useState } from 'react'
import "../../sass/DetailProduct/Review_images.scss";


interface SmallImagePath {
    id: string,
    image: any
    
}

interface LargeImage{
    id: string,
    image: any
}

const largeImages: LargeImage[] = [
    {
        id: "12345",
        image: require("./images/large_images/dog_1.png")
    },
    {
        id: "54321",
        image: require("./images/large_images/dog_2.png")
    },
    {
        id: "56789",
        image: require("./images/large_images/dog_3.png")
    }
]
 



const smallImagePaths: SmallImagePath[] = [
    {
        id: "12345",
        image: require("./images/small_images/dog_1.png")
    },
    {
        id: "54321",
        image:require("./images/small_images/dog_2.png")
    },
    {
        id: "56789",
        image: require("./images/small_images/dog_3.png")
    }
]







export default function Review_images() {
    const [largeImage, setlargeImage] = useState(largeImages[0]);
    

    const updateImage = (index:number)=>{
        setlargeImage((previousState):LargeImage =>{
            return {...previousState, image: largeImages[index].image};
        })
    }
    return (
        <div className='image'>
            <img src={largeImage.image} alt="" />
            <div className="small_image">
                {smallImagePaths.map((image, index) =>(
                    <img src={image.image} alt="" onClick={() =>updateImage(index)} />
                ))}
            </div>

        </div>
    )
}
