import '../styles/Error.css'
import { Link } from 'react-router-dom'

function Error() {
return (
    <div className='conteneur_error'>
    <h1 className='erreur'>404</h1>
    <h2 className='oups'>Oups! La page que vous demandez n'existe pas</h2>
    <Link to="/" className='retourAccueil'>Retourner sur la page d'accueil</Link>
    </div>
)
}

export default Error