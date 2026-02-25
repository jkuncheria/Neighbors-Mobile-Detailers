import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ClientBanner from '../components/ClientBanner';
import Categories from '../components/Categories';
import Difference from '../components/Difference';
import AboutHome from '../components/AboutHome';
import Inspiration from '../components/Inspiration';
import GoogleReviews from '../components/GoogleReviews';
import OurStory from '../components/OurStory';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Neighbors Mobile Detailers | Austin Auto Detailing, Ceramic Coating & Window Tinting"
        description="Neighbors Mobile Detailers - Austin's premier auto detailing company. Professional ceramic coatings, window tinting, vehicle wraps, and paint correction. Serving Austin, Scottsdale, Paradise Valley, Chandler & Fountain Hills."
        keywords="Austin auto detailing, ceramic coating Austin, window tinting Austin, vehicle wraps Austin, paint correction Austin, Scottsdale detailing, Paradise Valley auto spa"
        canonical="https://www.oldtownautospa.com"
      />
      <Hero />
      {/* <ClientBanner /> */}
      <Contact simplified={true} />
      <Categories />
      <AboutHome />
      {/* <OurStory /> */}

      {/* <Inspiration /> */}
      <GoogleReviews />
      <Difference />

      {/* Instagram Feed */}
      <section className="py-24 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-4 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9E2C] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#FF9E2C' }}>FOLLOW US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
              @geos_autodetail
            </h2>
            <div className="w-20 h-1 bg-[#FF9E2C] mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Check out our latest work and transformations on Instagram.
            </p>
          </div>
          
          <div className="elfsight-app-c9711d24-8e72-44a6-9b5c-5731995eaa75" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote today or call us directly. We're here to help protect and enhance your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-[#FF9E2C] hover:bg-yellow-400 text-black font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center"
            >
              Get Free Quote
            </Link>
            <a 
              href="tel:5126797853"
              className="bg-stone-700 hover:bg-stone-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center gap-2 border border-stone-600"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

