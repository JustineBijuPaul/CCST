import React from 'react';

const AboutUs = () => {
    return (
        <div className="p-4 sm:p-8 justify-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {/* About Us Section */}
                <div className="bg-white max-md:hidden shadow-md rounded-lg p-4 sm:p-6 flex flex-col justify-center text-justify">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-2 mb-4">About Us</h1>
                    <p className="text-gray-700 mb-4">
                        Welcome to <span className="font-semibold italic">Crystal Cleaning Service</span>, your trusted partner for professional cleaning solutions in Thiruvalla. We specialize in delivering exceptional cleaning services for homes, churches, and auditoriums, focusing on high roof ceilings, floor scrubbing, basic carpet cleaning, and more.
                    </p>
                    <p className="text-gray-700 mb-4">
                        At Crystal Cleaning Service, we prioritize eco-friendliness and health safety. That’s why we exclusively use ISO-grade, chemical-free cleaning liquids and state-of-the-art machinery, including vacuum cleaners, scrubbing machines, and carpet cleaning equipment.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Our mission is to provide spotless results while maintaining the highest standards of quality and sustainability. With a team of dedicated professionals, we ensure every cleaning task is handled with care and precision.
                    </p>
                    <p className="text-gray-700">
                        Whether it’s a one-time deep clean or regular maintenance, we’re here to make your spaces shine like new. Contact us today for an inspection, and let us take care of the rest!
                    </p>
                </div>
                <div className="bg-white md:hidden shadow-md rounded-lg p-4 flex flex-col justify-center text-justify">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-2 mb-4">About Us</h1>
                    <p className="text-gray-700 mb-4">
                        Welcome to <span className="font-semibold italic">Crystal Cleaning Service</span>, Thiruvalla’s trusted name for eco-friendly, professional cleaning. We specialize in cleaning high roof ceilings, houses, churches, and auditoriums, offering services like floor scrubbing and carpet cleaning.
                    </p>
                    <p className="text-gray-700 mb-4">
                        We use chemical-free, ISO-grade cleaning liquids and advanced machinery to ensure safe, high-quality results. Whether it’s a deep clean or regular maintenance, we tailor our services to your needs.
                    </p>
                    
                </div>
                <div className="flex items-center justify-center max-md:hidden">
                    <img
                        src="/imgs/aboutus.png"
                        alt="About Us"
                        className="rounded-lg shadow-md w-full max-w-sm"
                    />
                </div>

                {/* Why Choose Us Section */}
                <div className="flex items-center justify-center max-md:hidden">
                    <img
                        src="/imgs/aboutus2.png"
                        alt="Why Choose Us"
                        className="rounded-lg shadow-md w-full max-w-sm"
                    />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 border-b pb-2 mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-gray-700">
                            <span className="font-bold">Eco-Friendly Cleaning:</span> Safe for you and the environment.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-bold">Advanced Equipment:</span> Modern tools for efficient cleaning.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-bold">Tailored Solutions:</span> Services customized to your needs.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-bold">Transparent Pricing:</span> Quotes provided after inspection.
                        </li>
                    </ul>
                    <p className="mt-6 text-gray-800 font-semibold text-center">
                        Experience the Crystal Cleaning difference—where every corner sparkles!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
