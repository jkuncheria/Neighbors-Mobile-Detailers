import React from 'react';
import AboutComponent from '../components/About';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Neighbors Mobile Detailers | Austin Mobile Detailing"
        description="Learn about Neighbors Mobile Detailers, Austin's trusted mobile detailing company. Professional auto detailing, ceramic coatings, PPF, and window tinting services."
        keywords="about Neighbors Mobile Detailers, Austin mobile detailing, auto detailing Austin, ceramic coating Austin, PPF Austin"
        canonical="https://splashmobiledetail.com/about"
      />
      <AboutComponent />
    </>
  );
};

export default About;

