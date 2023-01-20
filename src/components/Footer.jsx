import logoWhite from '../assets/images/LOGO-white.png';
import  '../styles/Footer.css';

export default function Footer() {

  return (
    <footer className="footer">
      <div className='footer-wrapper'>
        <img src={logoWhite} title="Kasa" alt="Kasa logo" className="footer_logo"></img>
        <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}