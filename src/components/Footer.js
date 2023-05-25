import '../styles/Footer.css'
import logoKasa from '../assets/logo-kasa.svg'

function Footer() {
return (
    <>
    <footer className='arriere_plan_footer'>
         <img src={logoKasa} alt="logo kasa" className='footer-logo'/>
         <h5 className='copyright'>© 2020 Kasa. All rights reserved</h5>
    </footer>
    </>
)
}

export default Footer