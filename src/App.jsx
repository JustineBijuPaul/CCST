import React, { useState } from 'react';
import { Home, Sparkles, Camera, MessageCircle, MapPin } from 'lucide-react';

const CleaningServicesWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    details: ''
  });

  const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
      "/imgs/img1.webp",
      "/docs/images/carousel/carousel-2.svg",
      "/imgs/img2.webpp"
    ];

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
      <div className="relative w-full h-screen">
        <div className="relative h-screen overflow-hidden rounded-lg md:h-screen">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 h-screen transition-transform duration-700 ease-in-out ${activeSlide === index ? "translate-x-0" : "translate-x-full hidden"
                }`}
            >
              <img
                src={slide}
                className="block w-full h-screen object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              onClick={() => setActiveSlide(index)}
            ></button>
          ))}
        </div>
        {/* Controls */}
        <button
          className="absolute top-0 left-0 z-30 text-white flex items-center justify-center h-full px-4"
          onClick={prevSlide}
        >
          Previous
        </button>
        <button
          className="absolute top-0 right-0 z-30 text-white flex items-center justify-center h-full px-4"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    );
  };


  const services = [
    {
      name: 'High Ceiling Cleaning',
      description: 'Comprehensive spider web and dust removal for hard-to-reach areas',
      icon: <Sparkles className="w-12 h-12 text-blue-600 group-hover:text-blue-800 transition" />
    },
    {
      name: 'Carpet Deep Clean',
      description: 'Professional vacuuming and stain removal for pristine carpets',
      icon: <Camera className="w-12 h-12 text-green-600 group-hover:text-green-800 transition" />
    },
    {
      name: 'Floor Scrubbing',
      description: 'Thorough cleaning and polishing of all floor types',
      icon: <MapPin className="w-12 h-12 text-purple-600 group-hover:text-purple-800 transition" />
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'Absolutely amazing service! My home has never looked cleaner.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      text: 'Professional, efficient, and thorough. Highly recommend!',
      rating: 4.5
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setQuoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-white text-grey-800">
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-blue-900 text-white rounded-md"
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-40">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">
            <img src="/imgs/logo.png" alt="logo" width="60%" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['home', 'services', 'about', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="hover:text-blue-600 transition transform hover:scale-105"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
              {['home', 'services', 'about', 'contact'].map(section => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full p-4 text-left hover:bg-blue-50 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

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
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition transform hover:scale-105">
            Get a Quote Now
          </button>
        </section>
      </header>



      {/* Services Section */}
      <section id="services" className="flex flex-col h-screen justify-center items-center container mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.name}
              className="text-center p-6 bg-white shadow-md rounded-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {service.icon}
              <h3 className="text-lg md:text-xl font-semibold mt-4">{service.name}</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4">
        <div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-12">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto transform transition hover:scale-105 hover:shadow-xl"
              >
                <p className="italic mb-4 text-sm md:text-base">"{testimonial.text}"</p>
                <div className="font-semibold text-sm md:text-base">- {testimonial.name}</div>
                <div className="text-yellow-500">{'★'.repeat(Math.floor(testimonial.rating))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-12">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={quoteForm.name}
              onChange={handleFormChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-300 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={quoteForm.email}
              onChange={handleFormChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={quoteForm.phone}
            onChange={handleFormChange}
            className="w-full p-3 border rounded mt-4 focus:ring-2 focus:ring-blue-300 transition"
            required
          />
          <select
            name="serviceType"
            value={quoteForm.serviceType}
            onChange={handleFormChange}
            className="w-full p-3 border rounded mt-4 focus:ring-2 focus:ring-blue-300 transition"
            required
          >
            <option value="">Select Service Type</option>
            {services.map(service => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <textarea
            name="details"
            placeholder="Additional Details"
            value={quoteForm.details}
            onChange={handleFormChange}
            className="w-full p-3 border rounded mt-4 h-32 focus:ring-2 focus:ring-blue-300 transition"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded mt-4 hover:bg-blue-700 transition transform hover:scale-105"
          >
            Submit Quote Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold mb-2">SparkleClean Services</div>
            <p className="text-sm md:text-base">Professional Cleaning Solutions</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition">Contact Us</a>
          </div>
          <div className="text-sm">
            © 2024 SparkleClean. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CleaningServicesWebsite;