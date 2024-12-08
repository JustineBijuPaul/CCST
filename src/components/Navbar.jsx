import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <img
            src={isScrolled ? "/imgs/logo-black.png" : "/imgs/logo-white.png"}
            alt="logo"
            className={`transition-all duration-300 ${mobileMenuOpen ? "absolute top-1/4 left-1/2 transform -translate-x-1/2 z-40" : ""}`}
            width="60%"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-blue-900 text-white rounded-xl z-50 shadow-md"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-xl">
          {["home", "services", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={` transition transform hover:scale-105
              ${isScrolled ? "hover:text-blue-600" : "hover:text-orange-400"}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 md:hidden transition-transform duration-300 ${mobileMenuOpen ? "translate-y-0 z-50" : "-translate-y-full"}`}
        >
          {/* Mobile Menu Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute transition-transform top-4 right-4 p-2 bg-blue-900 text-white rounded-xl shadow-md"
          >
            Close
          </button>

          {["home", "services", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium text-black hover:text-blue-600 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
