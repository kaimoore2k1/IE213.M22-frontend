import { useState } from "react"

const imagesPath = {
    minus: "https://images.vexels.com/media/users/3/131484/isolated/preview/a432fa4062ed3d68771db7c1d65ee885-minus-inside-circle-icon-by-vexels.png",
    plus: "https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png"
}

interface State{
    open: boolean
}

function File(){
    const [state, setState] = useState({open:true});
    const toggleImage = () => {
        setState(state => ({ open: !state.open }))
    }

    function getImageName():string {
        switch (state.open) {
            case true:
                return imagesPath["plus"];

            case false:
                return imagesPath["minus"];
            default:
                break;
        }
        return "";
    }


    const imageName = getImageName();
    return (
        <div onClick={toggleImage}>
            {imagesPath.minus}
        </div>
    );

}

export default File;