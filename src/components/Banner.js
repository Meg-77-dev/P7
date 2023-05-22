import banner from '../assets/banniere.jpg'
import '../styles/HomeBanner.css'


function HomeBanner() {
    return (
    <div className="Banner">
        <h1 className="title-banner">Chez vous, partout et ailleurs</h1>
        <img className='Kasa-banner' src={banner} alt="banner-kasa"/>
    </div>
    )
}

export default HomeBanner