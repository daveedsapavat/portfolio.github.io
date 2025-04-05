import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // function alert(message) { 
  //   window.alert('if urgent only');
  // };
  

  return (
    <footer className="footer">
      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/daveedsapavat" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/daveed-sapavat-8a0461212/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:daveed4466@gmail.com">
          <FaEnvelope className="icon" />
        </a>

        <a href="tel:+919876543210" className="phone-icon">
          <FontAwesomeIcon icon={faPhoneAlt} size="2x"  className='icon' />
        </a>




        {/* <a href='tel: +91 9000123491'>
          <FaPhone number="+91 9000123491" className='icon' /> 
           </a> */}
        
           <a href="https://wa.me/919876543210" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
               className="icon" >
          <FontAwesomeIcon icon={faWhatsapp} size="2x"  className='icon'/>
          </a>



      </div>

      {/* Copyright */}
      <p className="footer-text">© {new Date().getFullYear()} Daveed Sapavat. All Rights Reserved.</p>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
      
    </footer>
  );
}

export default Footer;
