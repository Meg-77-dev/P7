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
            {aproposdata.map(({id, title, content}) => (
            <Collapse key={id} title={title} content={content} /> ))}
        </div>
        </div>
        </div>
    )
}

export default Apropos

/*<Collapse {aproposdata.map((apropos) => 
    key="id", title="title",
    content="content"
    )}*/