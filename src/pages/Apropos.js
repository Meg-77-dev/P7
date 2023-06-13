import banner from '../assets/banniere-a-propos.jpg'
import HomeBanner from '../components/Banner'
import Collapse from '../components/Collapse'
import aproposdata from '../datas/aproposdata.json'
import '../styles/LocationPage.css'



function Apropos() {
    return (
        <div className='apropos_page'>
            <div className="Banner_a_propos">
            <HomeBanner sourceImage={banner}/>
            </div>
            <div className='conteneur_apropos_global'>
            <div className='conteneur_apropos'>
            {aproposdata.map(({id, title, content}) => (
            <Collapse key={id} title={title} content={content} /> ))}
        </div>
        </div>
        </div>
    )
}

export default Apropos

