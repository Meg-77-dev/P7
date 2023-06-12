import Homebanner from '../assets/banniere.jpg'
import aboutBanner from '../assets/banniere-a-propos.jpg'
import '../styles/HomeBanner.css'


function HomeBanner(props) {
    return (
    <div className="Banner">
        
        <h1 className="title-banner">Chez vous, partout et ailleurs</h1>
        <img className='Kasa-banner' src={Homebanner} alt="banner-kasa"/>
    </div>
    )
}

export default HomeBanner