import React from 'react';
import Navbar from './components/Navbar.jsx';
import Carousel from './components/Carousel.jsx';
import QuoteRequestForm from './components/QuoteRequestForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import Cards from './components/Card.jsx';

const CleaningServicesWebsite = () => {
  const services = [
    {
      name: 'General Cleaning',
      description: 'Efficient and routine cleaning to maintain a neat and hygienic space.',
      icon: <img src='/imgs/janitor.png' width='15%' loading='lazy'/>
    },
    {
      name: 'Deep Cleaning',
      description: 'Intensive cleaning targeting hidden dirt and grime for a refreshed environment.',
      icon: <img src='/imgs/janitorial-service (1).png' width='15%' loading='lazy'/>
    },
    {
      name: 'Post-Construction Cleaning',
      description: 'Specialized cleanup to remove debris, dust, and residues after construction work.',
      icon: <img src='/imgs/construction.png' width='15%' loading='lazy'/>
    },
    {
      name: 'High Ceiling Cleaning',
      description: 'Comprehensive spider web and dust removal for hard-to-reach areas',
      icon: <img src='/imgs/people.png' width='15%' loading='lazy'/>
    },
    {
      name: 'Carpet Clean',
      description: 'Professional vacuuming and stain removal for pristine carpets',
      icon: <img src='/imgs/carpet-cleaner.png' width='15%' loading='lazy'/>
    },
    {
      name: 'Floor Scrubbing',
      description: 'Thorough cleaning and polishing of all floor types',
      icon: <img src='/imgs/machine.png' width='15%' loading='lazy'/>
    },
    {
      name: 'Pressure Washing',
      description: 'High-powered water cleaning for removing tough stains, dirt, and grime from outdoor surfaces.',
      icon: <img src='/imgs/pressure-washer.png' width='15%' loading='lazy'/>
    },
    {
      name: 'Upholstery Cleaning',
      description: 'Gentle yet effective cleaning for sofas, chairs, and other furniture.',
      icon: <img src='/imgs/sofa.png' width='15%' loading='lazy'/>
    },
    {
      name: 'Office Cleaning',
      description: 'Tailored cleaning services for office spaces, including desks, floors, and common areas.',
      icon: <img src='imgs/cleaning (1).png' width='15%' loading='lazy'/>
    }
  ];

  return (
    <div className="min-h-screen bg-white text-grey-800">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <header id="home" className="relative h-screen overflow-hidden">
        {/* Carousel Section */}
        <div className="absolute inset-0 h-screen">
          <Carousel />
        </div>

        {/* Content Section */}
        <section className="absolute inset-0 z-10 bg-black/50 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Crystal Clean Spaces, Every Time!
          </h1>
          <p className="text-md md:text-xl mb-8 text-gray-200">
            Professional cleaning services that transform your environment
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
          >
            Get a Quote Now
          </a>
        </section>
      </header>

      {/* Services Section */}
      <section id="services" className="max-md:hidden flex flex-col h-screen justify-center items-center container mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.name}
              className="text-center p-6 border-2 border-blue-600 bg-white shadow-md rounded-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {service.icon}
              <h3 className="text-lg md:text-xl font-semibold mt-4">{service.name}</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div id='services-mob' className="md:hidden">
        <Cards />
      </div>

      <section id='about' className="bg-blue-50 py-16 px-4 h-screen-2">
        <div>
          <AboutUs />
        </div>
      </section>

      <section id='contact'>
        {/* Quote Request Form */}
        <QuoteRequestForm />

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Left GIF */}
            <a href="https://www.instagram.com/linxcapture?igsh=a25xM2plN2R1cjRt" className="w-40 md:w-56 max-md:hidden">
              <img src="/imgs/linxcapture.gif" alt="LinXcapture" className="mx-auto md:mx-0" />
            </a>

            {/* Center Content */}
            <div className="container mx-auto text-center">
              <div className="mb-6">
                <div className="text-2xl font-bold mb-2">Crystal Cleaning Services Thiruvalla</div>
                <p className="text-sm md:text-base">Professional Cleaning Solutions</p>
              </div>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              </div>
              <div className="text-sm">
                © 2024 CrystalCleaningServicesThiruvalla. All Rights Reserved.
              </div>
            </div>
            {/* Right GIF */}
            <a href="https://www.instagram.com/saffinvarughese/profilecard/?igsh=MTE4YnJlN3UydzdhZg==" className="w-40 md:w-56 max-md:hidden">
              <img src="/imgs/amozrich.gif" alt="AmozRich" className="mx-auto md:mx-0" />
            </a>
            <div className="hidden md:hidden max-md:flex justify-between items-center mt-6">
              <a
                href="https://www.instagram.com/linxcapture?igsh=a25xM2plN2R1cjRt"
                className="w-32"
              >
                <img src="/imgs/linxcapture.gif" alt="LinXcapture" />
              </a>
              <a
                href="https://www.instagram.com/saffinvarughese/profilecard/?igsh=MTE4YnJlN3UydzdhZg=="
                className="w-32"
              >
                <img src="/imgs/amozrich.gif" alt="Amoz Rich" />
              </a>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
};

export default CleaningServicesWebsite;
