import React from 'react';
import FAQComponent from '../components/FAQ';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  return (
    <>
      <SEO
        title="FAQ | Neighbors Mobile Detailers | Auto Detailing Questions Austin"
        description="Frequently asked questions about Neighbors Mobile Detailers services in Austin and Austin, Texass. Get answers about our auto detailing services, ceramic coatings, headlight restoration, pricing, and more."
        keywords="auto detailing FAQ, car detailing questions Austin, ceramic coating FAQ, headlight restoration questions, Austin CO detailing"
        canonical="https://www.oldtownautospa.com/faq"
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;

