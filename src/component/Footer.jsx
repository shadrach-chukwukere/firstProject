import { useRef, useEffect, useState } from 'react';
import callUs from '../assets/image/callUS.png';
import mailUs from '../assets/image/mailUS.png';
import unknown from '../assets/image/unknown.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

export default function FooterComponent() {
  
  const scrollBtn = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    setScrollTop(currentScrollTop);
    setShowScrollBtn(currentScrollTop > 10);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="container row">
            <div className="container col-lg-3">
              <div className="">
                <p className="footTile">QUICK LINKS</p>
                <p className="footVile">Home</p>
                <p className="footVile">About</p>
                <p className="footVile">Services</p>
                <p className="footVile">Contact</p>
                <p className="footVile">Portfolio</p>
                <p className="footVile">Our Policy</p>
              </div>
            </div>
            <div className="container col-lg-3">
              <div className="">
                <p className="footTile">OUR SERVICES</p>
                <p className="footVile">Web Development</p>
                <p className="footVile">App Development</p>
                <p className="footVile">Ecommerce Solution</p>
                <p className="footVile">Software Development</p>
                <p className="footVile">Cloud Computing Solution</p>
                <p className="footVile">Digital Marketing</p>
              </div>
            </div>
            <div className="container col-lg-3">
              <div className="">
                <p className="footTile">OUR TECHNOLOGIES</p>
                <p className="footVile">Laravel Development</p>
                <p className="footVile">React JS App Development</p>
                <p className="footVile">Vue JS App Development</p>
              </div>
            </div>
            <div className="container col-lg-3">
              <div className="">
                <p className="footTile">CONTACT & FOLLOW US</p>
                <div className="d-flex justify-content-around socialMediaIcon">
                 <div className=""> <FaFacebookF className='socialIcons'/></div>
               <div className="">   <FaTwitter className='socialIcons'/></div>
                 <div className=""> <FaInstagram className='socialIcons'/></div>
                  <div className=""><FaLinkedinIn className='socialIcons'/></div>
                </div>
                <p className="footVile">
                  <img src={callUs} alt="call" className='footContactIcon' />
                  <span className='p-2'>Phone: (234) 0800-000-0000</span>
                </p>
                <p className="footVile">
                  <img src={mailUs} alt="call" className='footContactIcon' />
                  <span className='p-2'>E-mail:</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {showScrollBtn && (
          <div className="text-end container-fluid unknownMom">
            <img 
              src={unknown} 
              alt="Scroll to top" 
              className='unknown' 
              onClick={scrollToTop} 
              ref={scrollBtn} 
              style={{ cursor: 'pointer' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}