import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('our-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[700px] md:h-[800px] bg-gray-900 overflow-hidden">
      {/* Background Video - cropped bottom */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-[120%] object-cover object-top"
      >
        <source src="/autoherovideo-hq.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0 z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight" style={{ textShadow: '0 4px 8px rgba(0,0,0,1), 0 8px 16px rgba(0,0,0,0.8), 0 12px 24px rgba(0,0,0,0.6)' }}>
          AUSTIN'S PREMIER<br />
          <span className="inline-block font-black">
            MOBILE DETAILERS
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md font-light">
          Premium detailing, ceramic coatings, and paint correction - right to your doorstep. Serving the greater Austin area, we deliver showroom-quality results without the hassle of visiting a shop.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/contact"
            className="bg-[#FF9E2C] hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center"
          >
            GET FREE QUOTE
          </Link>
          <a 
            href="tel:5126797853"
            className="bg-stone-800/80 hover:bg-stone-700 text-white font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center border border-[#FF9E2C]/30"
          >
            CALL US
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;