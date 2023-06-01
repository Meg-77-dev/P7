import logoKasa from '../assets/logo-kasa.svg'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

function Nav(){
    return (
    <div className="Nav-conteneur">
        <img src={logoKasa} alt="logo kasa" className='kasa-logo'/>
        <ul className='conteneur-link'>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/Apropos">A propos</NavLink>
        </ul>
    </div>
    )
}

export default Nav