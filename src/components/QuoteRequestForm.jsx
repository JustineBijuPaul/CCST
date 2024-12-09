import React, { useState } from 'react';

const QuoteRequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        details: ''
    });

    const services = [
        'High Ceiling Cleaning',
        'Carpet Deep Clean',
        'Floor Scrubbing'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare message text
        const message = `Quote Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}
Additional Details: ${formData.details || 'No additional details'}`;

        // WhatsApp message (using web.whatsapp.com) //TODO: Replace +1234567890 with your business phone number
        const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`;

        // Email composition //TODO: Replace your-business-email@example.com with your business email
        const emailUrl = `mailto:your-business-email@example.com?subject=Quote Request from ${formData.name}&body=${encodeURIComponent(message)}`;

        // Open WhatsApp and Email in new tabs
        window.open(whatsappUrl, '_blank');
        window.open(emailUrl, '_blank');

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            serviceType: '',
            details: ''
        });

        // Optional: Show success message
        alert('Quote request submitted! WhatsApp and Email windows will open.');
    };

    return (
        <section className="container mx-auto py-36 px-4">
            <h2 className="text-2xl md:text-3xl text-center mb-12">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-300 transition"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-300 transition"
                        required
                    />
                </div>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded mt-4 focus:ring-2 focus:ring-blue-300 transition"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit phone number"
                />
                <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 border rounded mt-4 focus:ring-2 focus:ring-blue-300 transition"
                    required
                >
                    <option value="">Select Service Type</option>
                    {services.map(service => (
                        <option key={service} value={service}>
                            {service}
                        </option>
                    ))}
                </select>
                <textarea
                    name="details"
                    placeholder="Additional Details"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full p-3 border rounded mt-4 h-32 focus:ring-2 focus:ring-blue-300 transition"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded mt-4 hover:bg-blue-700 transition transform hover:scale-105"
                >
                    Submit Quote Request
                </button>
            </form>

            {/* Information Section */}
            <div className="mt-8 text-center text-sm text-gray-600">
                <p>By submitting this form, you'll be redirected to WhatsApp and Email to send your quote request.</p>
                <p>Ensure you have WhatsApp Web and your default email client set up.</p>
            </div>
        </section>
    );
};

export default QuoteRequestForm;