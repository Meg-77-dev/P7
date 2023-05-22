import logoKasa from '../assets/logo-kasa.svg'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'
import Apropos from './Apropos'

function Nav(){
    return (
    <div className="Nav-conteneur">
        <img src={logoKasa} alt="logo kasa" className='kasa-logo'/>
        <ul className='conteneur-link'>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/Apropos" element={Apropos}>A propos</NavLink>
        </ul>
    </div>
    )
}

export default Nav