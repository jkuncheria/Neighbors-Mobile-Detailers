import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Gallery: React.FC = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <SEO
        title="Gallery | Neighbors Mobile Detailers | Austin Auto Detailing"
        description="See the amazing transformations from Neighbors Mobile Detailers in Austin, TX. Photos of interior detailing, ceramic coatings, paint correction, and more."
        keywords="auto detailing gallery, car detailing gallery Austin, ceramic coating results, paint correction Austin, detailing transformations"
        canonical="https://www.neighborsmobiledetailing.com/gallery"
      />
      <section className="py-24 bg-gray-950 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider text-sm uppercase text-[#FF9E2C]">GALLERY</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Our Work
            </h1>
            <div className="w-20 h-1 bg-[#FF9E2C] mx-auto mb-8"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Check out our latest detailing projects and transformations. From paint correction to full interior details, our work speaks for itself.
            </p>
          </div>

          {/* Instagram Feed Widget */}
          <div className="mb-16">
            <div className="elfsight-app-c9711d24-8e72-44a6-9b5c-5731995eaa75" data-elfsight-app-lazy></div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 md:p-16 text-center border border-gray-800">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let us restore your vehicle to showroom condition. Contact us today for a free estimate.
            </p>
            <Link
              to="/contact"
              className="inline-block text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg bg-[#FF9E2C] hover:bg-yellow-400"
            >
              Get Free Estimate
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;

