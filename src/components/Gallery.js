import { useState } from "react";
import '../styles/Gallery.css';

function Caroussel(props) {
    //constante contenant les images 
    const pictures = props.pictures
    //Variable de compteur définie à 0 
    const [ImageLocation, setImageLocation] = useState(0)
    //Variable compteur des images
    const [Image, setImage] = useState(pictures[0])

    const nextImageLocation = () => {
        //L'image est égale à -1 alors l'image suivante est égale à 0
        let nextImage = ImageLocation
        if (ImageLocation === pictures.length - 1) {
            nextImage = 0
        }
        //Sinon l'image suivante est égale à +1
        else {
            nextImage = ImageLocation + 1
        }
        setImageLocation(nextImage)
        setImage(pictures[nextImage])
    }
    //Si l'image est égale à 0 alors l'image précédente est égale à -1
    const backImageLocation = () => {
        let backImage = ImageLocation
        if (ImageLocation === 0) {
            backImage = pictures.length - 1
        }
        //Sinon l'image précédente n'est pas égale à 0 alors l'image précédente est égale à -1 
        else {
            backImage = ImageLocation - 1
        }
        setImageLocation(backImage)
        setImage(pictures[backImage])
    }
    //Si il y a plus d'une photo mettre les flèches et le compteur
    if (pictures.length > 1) {
        return (
            <>
                <div className="conteneur_caroussel">
                    <img src={Image} alt="une photo du logement" className="image_caroussel" key={ImageLocation} />
                    <div className="fleches">
                        <div className="arrow_left" onClick={() => backImageLocation()}>
                            <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="arrow_right" onClick={() => nextImageLocation()}>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                    <div className="counter">{ImageLocation + 1}/{pictures.length}</div>
                </div>
            </>
        )
    }
    //Sinon ne pas ajouter les flèches et le compteur 
    else {
        return (
            <>
                <div className="conteneur_caroussel">
                    <img src={Image} alt="une photo du logement" className="image_caroussel" key={ImageLocation} />
                    </div>
            </>
        )
    }
}

export default Caroussel