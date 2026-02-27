import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Award, Sparkles, Shield, Clock, CheckCircle, Quote, Leaf, TrendingUp, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-[#FF9E2C]" />,
      title: 'Over a Decade of Expertise',
      description: 'More than 10 years of experience in professional auto detailing and protection services.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#FF9E2C]" />,
      title: 'Mobile Convenience',
      description: 'We come to you — professional detailing at your home, office, or any location.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF9E2C]" />,
      title: 'Premium Protection',
      description: 'Ceramic coatings, paint protection films, and professional detailing services.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#FF9E2C]" />,
      title: 'Transparent Customer Care',
      description: 'Honest communication and exceptional service every step of the way.'
    }
  ];

  const services = [
    'Interior Detailing',
    'Exterior Detailing',
    'Paint Corrections',
    'Ceramic Coatings',
            'Factory Finish System'
  ];

  return (
    <section className="py-24 bg-gray-950 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16">
          <img 
            src="/services/auto-detailing.jpeg" 
            alt="About Us - Professional Auto Detailing and Protection" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <span className="text-[#FF9E2C] font-bold tracking-wider text-sm uppercase">ABOUT US</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2">
              Austin's Premier Mobile Detailer
            </h1>
          </div>
        </div>

        {/* Main About Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome to Neighbors Mobile Detailers</h2>
            <div className="w-20 h-1 bg-[#FF9E2C] mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-800">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Welcome to <span className="font-bold text-white">Neighbors Mobile Detailers</span>, Austin's premier destination for top-tier car detailing. With over a decade of expertise, we specialize in interior and exterior detailing, paint corrections, ceramic coatings, and paint protection films.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our <span className="font-bold text-white">mobile detailing service</span>, industry-leading techniques, and transparent customer care redefine automotive aesthetics and elevate your driving experience — all at your convenience.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Choose Neighbors Mobile Detailers for a seamless blend of passion and precision, ensuring your vehicle reflects <span className="font-bold text-[#FF9E2C]">luxury and style</span>, enhancing its value and extending its life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:5126797853" 
                  className="flex items-center justify-center gap-2 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg bg-[#FF9E2C] hover:bg-yellow-400"
                >
                  <Phone className="w-5 h-5" />
                  (512) 679-7853
                </a>
                <div className="flex items-center justify-center gap-2 bg-gray-800 text-gray-300 font-bold py-4 px-8 rounded-xl border border-gray-700">
                  <MapPin className="w-5 h-5 text-[#FF9E2C]" />
                  Austin, TX
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-[#FF9E2C] transition-colors">
                <div className="bg-gray-800 p-4 rounded-xl inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Message From The Owner */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Message From The Owner</h2>
            <div className="w-20 h-1 bg-[#FF9E2C] mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-800 relative">
              <Quote className="w-12 h-12 text-[#FF9E2C] opacity-30 absolute top-6 left-6" />
              
              <div className="relative z-10">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Welcome to <span className="font-bold text-white">Neighbors Mobile Detailer</span>, where craftsmanship, dedication, and precision redefine the art of vehicle care. I'm the founder of this venture, and my passion for detailing comes from years of hands-on experience and a genuine love for restoring every car's original beauty and brilliance.
                </p>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  My journey in the automotive care industry started with a simple belief — <span className="font-bold text-[#FF9E2C]">every vehicle deserves the highest level of attention and respect</span>. Over the years, I've refined my techniques and developed professional standards that consistently deliver exceptional results. What began as a personal passion has grown into a mission to provide Austin residents with premium, reliable, and convenient detailing services right at their doorstep.
                </p>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At Neighbors Mobile Detailer, we specialize in <span className="font-bold text-white">ceramic coatings, paint correction, and full interior and exterior detailing</span> — designed to enhance protection, appearance, and long-term value. Every vehicle we service receives meticulous care and professional-grade results, delivered with precision and pride. My team and I are committed to treating every car as if it were our own, ensuring unmatched quality and customer satisfaction.
                </p>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our mission is simple: to bring top-tier auto detailing directly to our Austin community with integrity, skill, and passion. Whether it's your daily commuter, weekend ride, or luxury vehicle, we're here to keep it looking flawless and protected.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Thank you for choosing <span className="font-bold text-[#FF9E2C]">Neighbors Mobile Detailer</span> — we look forward to earning your trust and exceeding your expectations, one detail at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Believe In */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Believe In</h2>
            <div className="w-20 h-1 bg-[#FF9E2C] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">Our core values guide everything we do at Neighbors Mobile Detailer.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800 hover:border-[#FF9E2C] transition-all duration-300 group hover:shadow-xl hover:shadow-[#FF9E2C]/5">
              <div className="bg-gradient-to-br from-[#FF9E2C] to-yellow-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FF9E2C] transition-colors">Taking Care of the Environment</h3>
              <p className="text-gray-400 leading-relaxed">
                We use biodegradable soaps and water-efficient methods because we live here too. Austin's natural beauty is worth protecting, and there's no reason to harm the environment just to keep a car clean.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800 hover:border-[#FF9E2C] transition-all duration-300 group hover:shadow-xl hover:shadow-[#FF9E2C]/5">
              <div className="bg-gradient-to-br from-[#FF9E2C] to-yellow-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FF9E2C] transition-colors">Continuous Improvement</h3>
              <p className="text-gray-400 leading-relaxed">
                The detailing industry never stands still — and neither do we. Our team constantly tests new products, tools, and techniques to deliver the best possible results based on feedback from Austin customers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 border border-gray-800 hover:border-[#FF9E2C] transition-all duration-300 group hover:shadow-xl hover:shadow-[#FF9E2C]/5">
              <div className="bg-gradient-to-br from-[#FF9E2C] to-yellow-600 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FF9E2C] transition-colors">Honesty and Fair Pricing</h3>
              <p className="text-gray-400 leading-relaxed">
                No upselling, no gimmicks, no hidden fees. We'll tell you exactly what your vehicle needs and what it doesn't — because trust and transparency always come first at Neighbors Mobile Detailer.
              </p>
            </div>
          </div>
        </div>

        {/* Services Banner */}
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 mb-20 border border-stone-800">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Our Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#FF9E2C] flex-shrink-0" />
                <span className="text-gray-300 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Star Reviews Banner */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-20 text-center border border-gray-800">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-[#FF9E2C] fill-[#FF9E2C]" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-white">Where Detail Expertise Meets Luxury</p>
          <p className="text-gray-400 mt-2">Serving Austin, Round Rock, Cedar Park, Georgetown, Pflugerville & Leander</p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 text-center border border-gray-800">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#FF9E2C]" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Transform Your Vehicle at Neighbors Mobile Detailers
          </h3>
          <p className="text-xl text-[#FF9E2C] font-semibold mb-2">
            Premium Detailing, Lasting Protection.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Book Your Transformation Today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5126797853" 
              className="flex items-center justify-center gap-2 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg bg-[#FF9E2C] hover:bg-yellow-400"
            >
              <Phone className="w-5 h-5" />
              (512) 679-7853
            </a>
            <Link 
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white text-gray-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:bg-gray-100"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


