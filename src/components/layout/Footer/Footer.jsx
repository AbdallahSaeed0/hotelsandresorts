import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaSpotify, FaTripadvisor, FaTiktok } from 'react-icons/fa';
import '../../../styles/components/layout/Footer.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const socialIcons = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaSpotify, href: '#', label: 'Spotify' },
    { icon: FaTripadvisor, href: '#', label: 'TripAdvisor' },
    { icon: FaTiktok, href: '#', label: 'TikTok' }
  ];

  return (
    <footer className="footer">
      <div className="container-fluid">
                          {/* Combined Top Section and Navigation */}
         <div className="footer-main">
           <div className="row">
             {/* Taglines Column */}
                           {/* Navigation Columns */}
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="footer-column">
                      <ul className="footer-links">
                        <li><a href="#" className="footer-link">About FIVE</a></li>
                        <li><a href="#" className="footer-link">In the Press</a></li>
                        <li><a href="#" className="footer-link">Trade Partners</a></li>
                        <li><a href="#" className="footer-link">Awards</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="footer-column">
                      <ul className="footer-links">
                        <li><a href="#" className="footer-link">Careers</a></li>
                        <li><a href="#" className="footer-link">Culture</a></li>
                        <li><a href="#" className="footer-link">FAQs</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="footer-column">
                      <ul className="footer-links">
                        <li><a href="#" className="footer-link">Contact</a></li>
                        <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                        <li><a href="#" className="footer-link">Cookies</a></li>
                        <li><a href="#" className="footer-link">Privacy Policy</a></li>
                        <li><a href="#" className="footer-link">Sitemap</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

                             {/* Taglines, Clock and Social Column */}
               <div className="col-lg-6 col-md-6">
                 <div className="row">
                   {/* Taglines Column */}
                   <div className="col-md-4">
                     <div className="footer-taglines">
                       <p className="tagline-line">Elevating Luxury</p>
                       <p className="tagline-line">Redefining Entertainment</p>
                     </div>
                   </div>
                   
                   {/* Clock and Social Column */}
                   <div className="col-md-8">
                     <div className="footer-clock-social">
                       <div className="footer-clock">
                         <span className="clock-time">{formatTime(currentTime)}</span>
                       </div>
                       <div className="footer-social">
                         {socialIcons.map((social, index) => (
                           <a
                             key={index}
                             href={social.href}
                             className="social-icon"
                             aria-label={social.label}
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                             <social.icon />
                           </a>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

             
           </div>
         </div>

                 {/* Call-to-Action Button */}
         <div className="footer-cta">
           <button className="cta-button">
             COME PLAY <span className="cta-arrow">↗</span>
           </button>
         </div>

         {/* Large Visual Element */}
         <div className="footer-visual">
           <img 
             src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/11/footer-five.svg" 
             alt="FIVE Logo" 
             className="footer-visual-logo"
           />
         </div>
      </div>
    </footer>
  );
};

export default Footer;
