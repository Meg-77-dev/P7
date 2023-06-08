import banner from '../assets/banniere-a-propos.jpg'
import Collapse from '../components/Collapse'
import aproposdata from '../datas/aproposdata.json'
import '../styles/LocationPage.css'



function Apropos() {
    return (
        <div className='apropos_page'>
            <div className="Banner_a_propos">
                <img className='banner_a_propos' src={banner} alt="bannière à propos" />
            </div>
            <div className='conteneur_apropos_global'>
            <div className='conteneur_apropos'>
            {aproposdata.map((apropos)=> 
            <Collapse key='1' title= 'Fiabilité' 
            content={apropos.fiabilité} /> )}
            </div>
            <div className='conteneur_apropos'>
             {aproposdata.map((apropos)=> 
            <Collapse key='2' title= 'Respect' 
            content={apropos.respect} /> )}
            </div>
            <div className='conteneur_apropos'>
             {aproposdata.map((apropos)=> 
            <Collapse key='3' title= 'Service' 
            content={apropos.service} /> )}
            </div>
            <div className='conteneur_apropos'>
             {aproposdata.map((apropos)=> 
            <Collapse key='4' title= 'Sécurité' 
            content={apropos.sécurité} /> )}
            </div>
        </div>
        </div>
    )
}

export default Apropos