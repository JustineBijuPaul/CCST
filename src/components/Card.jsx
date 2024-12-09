import React, { useEffect, useState } from 'react';

const services = [
  {
    name: 'General Cleaning',
    description: 'Efficient and routine cleaning to maintain a neat and hygienic space.',
    icon: <img src='/imgs/janitor.png' width='15%' alt='General Cleaning' loading='lazy'/>
  },
  {
    name: 'Deep Cleaning',
    description: 'Intensive cleaning targeting hidden dirt and grime for a refreshed environment.',
    icon: <img src='/imgs/janitorial-service (1).png' width='15%' alt='Deep Cleaning' loading='lazy'/>
  },
  {
    name: 'Post-Construction Cleaning',
    description: 'Specialized cleanup to remove debris, dust, and residues after construction work.',
    icon: <img src='/imgs/construction.png' width='15%' alt='Post-Construction Cleaning' loading='lazy'/>
  },
  {
    name: 'High Ceiling Cleaning',
    description: 'Comprehensive spider web and dust removal for hard-to-reach areas',
    icon: <img src='/imgs/people.png' width='15%' alt='High Ceiling Cleaning' loading='lazy'/>
  },
  {
    name: 'Carpet Clean',
    description: 'Professional vacuuming and stain removal for pristine carpets',
    icon: <img src='/imgs/carpet-cleaner.png' width='15%' alt='Carpet Cleaning' loading='lazy'/>
  },
  {
    name: 'Floor Scrubbing',
    description: 'Thorough cleaning and polishing of all floor types',
    icon: <img src='/imgs/machine.png' width='15%' alt='Floor Scrubbing' loading='lazy'/>
  },
  {
    name: 'Pressure Washing',
    description: 'High-powered water cleaning for removing tough stains, dirt, and grime from outdoor surfaces.',
    icon: <img src='/imgs/pressure-washer.png' width='15%' alt='Pressure Washing' loading='lazy'/>
  },
  {
    name: 'Upholstery Cleaning',
    description: 'Gentle yet effective cleaning for sofas, chairs, and other furniture.',
    icon: <img src='/imgs/sofa.png' width='15%' alt='Upholstery Cleaning' loading='lazy'/>
  },
  {
    name: 'Office Cleaning',
    description: 'Tailored cleaning services for office spaces, including desks, floors, and common areas.',
    icon: <img src='/imgs/cleaning (1).png' width='15%' alt='Office Cleaning' loading='lazy'/>
  }
];

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const visibleServices = services.slice(activeIndex).concat(services.slice(0, activeIndex));

  return (
    <section id="services" className="md:hidden flex flex-col h-screen justify-center items-center container mx-auto py-16 px-4 relative">
      <h2 className="text-2xl md:text-3xl text-center mb-12">Our Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {visibleServices.slice(0, 3).map((service, index) => (
          <div
            key={service.name}
            className={`text-center p-6 bg-white shadow-md border-2 border-blue-600 rounded-lg group hover:shadow-xl transition-all duration-300 transform ${index === 0 ? 'animate-slide-in' : ''}`}
          >
            {service.icon}
            <h3 className="text-lg md:text-xl font-semibold mt-4">{service.name}</h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button onClick={handlePrevious} className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300">
          &#9650;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300">
          &#9660;
        </button>
      </div>
    </section>
  );
};

export default Cards;
