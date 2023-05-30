import banner from '../assets/banniere-a-propos.jpg'
import '../styles/Apropos.css'

function Apropos() {
    return (
        <>
            <div className="Banner_a_propos">
                <img className='banner_a_propos' src={banner} alt="bannière à propos" />
            </div>
            <div className='conteneur_collapses'>
            <div className='collapses_a_propos'>
                <h2 className='title_collapses_a_propos'>Fiabilité</h2>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className='collapses_a_propos'>
                <h2 className='title_collapses_a_propos'>Respect</h2>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className='collapses_a_propos'>
                <h2 className='title_collapses_a_propos'>Service</h2>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className='collapses_a_propos'>
                <h2 className='title_collapses_a_propos'>Sécurité</h2>
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
        </>
    )
}

export default Apropos