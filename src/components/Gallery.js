import { useState } from "react";
import '../styles/Gallery.css';

function Caroussel(props) {
    const pictures = props.pictures
    const [ImageLocation, setImageLocation] = useState(0)
    const [Image, setImage] = useState(pictures[0])

    const nextImageLocation = () => {
        let nextImage = ImageLocation
        if (ImageLocation === pictures.length - 1) {
            nextImage = 0
        }
        else {
            nextImage = ImageLocation + 1
        }
        setImageLocation(nextImage)
        setImage(pictures[nextImage])
    }

    const backImageLocation = () => {
        let backImage = ImageLocation
        if (ImageLocation === 0) {
            backImage = pictures.length - 1
        }
        else {
            backImage = ImageLocation - 1
        }
        setImageLocation(backImage)
        setImage(pictures[backImage])
    }

    if (pictures.length) {
        return (
            <>
                <div className="conteneur_caroussel">
                    <img src={Image} alt="une photo du logement" className="image_caroussel" key={ImageLocation} />
                    <div className="fleches">
                        <div className="arrow_left" onClick={() => backImageLocation()}>
                            <i class="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="arrow_right" onClick={() => nextImageLocation()}>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                    <div className="counter">{ImageLocation + 1}/{pictures.length}</div>
                </div>
            </>
        )
    }
}

export default Caroussel