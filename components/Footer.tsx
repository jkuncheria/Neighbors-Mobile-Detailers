import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 pt-16 pb-8 px-4 md:px-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4 group">
              <img 
                src="/geologo.PNG" 
                alt="Neighbors Mobile Detailers" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Professional Mobile Detailing<br />
              & Protection Services
            </p>
            <div className="text-sm text-stone-400 mb-4 space-y-1">
              <p><a href="tel:5126797853" className="hover:text-[#FF9E2C]">(512) 679-7853</a></p>
              <p><a href="mailto:neighborsmobiledetailing@outlook.com" className="hover:text-[#FF9E2C]">neighborsmobiledetailing@outlook.com</a></p>
              <p className="mt-2 font-semibold text-stone-300">Serving Austin, TX and surrounding areas</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Geos-Auto-Detailing/61576056915809/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#FF9E2C] transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.instagram.com/geos_autodetail/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#FF9E2C] transition-colors"><Instagram className="w-5 h-5"/></a>
              <a href="https://www.google.com/maps/place/Neighbors+Mobile+Detailing/@30.3582525,-97.7368151,130711m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6db17950c080fd97:0x4d80e535180ac780!8m2!3d30.3582525!4d-97.736815!16s%2Fg%2F11vy4gw4cw" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#FF9E2C] transition-colors"><MapPin className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-[#FF9E2C] font-semibold">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/auto-detailing" onClick={scrollToTop} className="hover:text-[#FF9E2C]">
                  Auto Detailing
                </Link>
              </li>
              <li>
                <Link to="/paint-correction" onClick={scrollToTop} className="hover:text-[#FF9E2C]">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link to="/ceramic-coatings" onClick={scrollToTop} className="hover:text-[#FF9E2C]">
                  Ceramic Coating
                </Link>
              </li>
                                          <li>
                <Link to="/factory-finish-system" onClick={scrollToTop} className="hover:text-[#FF9E2C]">
                  Factory Finish System
                </Link>
              </li>
                          </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="hover:text-[#FF9E2C]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-[#FF9E2C]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-[#FF9E2C]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-[#FF9E2C]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Hours</h4>
            <div className="text-sm text-gray-400 space-y-1">
              <div className="flex justify-between"><span>Monday</span><span className="text-gray-300">7 AM–5 PM</span></div>
              <div className="flex justify-between"><span>Tuesday</span><span className="text-gray-300">7 AM–5 PM</span></div>
              <div className="flex justify-between"><span>Wednesday</span><span className="text-gray-300">7 AM–5 PM</span></div>
              <div className="flex justify-between"><span>Thursday</span><span className="text-gray-300">9 AM–5 PM</span></div>
              <div className="flex justify-between"><span>Friday</span><span className="text-gray-300">7 AM–7 PM</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="text-gray-300">7 AM–7 PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="text-gray-300">7 AM–7 PM</span></div>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p>&copy; 2026 Neighbors Mobile Detailers. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-4 mt-4 text-center">
          <p className="text-xs text-gray-500">
            Built by{' '}
            <a 
              href="https://renolens.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline font-medium" style={{ color: '#FF9E2C' }}
            >
              RenoLens
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;