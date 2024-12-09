import React from "react";

const PrivacyPolicy = () => {
  return (
    <div id="PrivacyPolicy" className="privacy-policy-container max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center my-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4 text-center">Effective Date: [Insert Date]</p>

      <p className="text-lg mb-6">
        Crystal Cleaning Services Thiruvalla (referred to as "we," "our," or "us") is committed to
        protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our services or visit our website.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personal Information:</strong> Name, Email address, Phone number, Address</li>
          <li><strong>Non-Personal Information:</strong> Browser type, IP address, Usage data (e.g., pages visited, time spent on the website)</li>
          <li><strong>Service-Specific Information:</strong> Details about your cleaning requirements, Preferred schedule</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and manage our cleaning services.</li>
          <li>To communicate with you, including sending confirmations, updates, or responses to inquiries.</li>
          <li>To improve our website and services based on usage trends.</li>
          <li>To comply with legal obligations and resolve disputes.</li>
          <li>For marketing purposes, such as sharing promotional offers (with your consent).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
        <p className="mb-4">We do not sell or rent your personal information. However, we may share your information in the following circumstances:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Service Providers:</strong> With third-party vendors who assist in delivering our services (e.g., payment processors, scheduling tools).</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, sale, or transfer of our business assets.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
        <p className="mb-4">We may use cookies and similar technologies to enhance your browsing experience on our website. These technologies help us:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Understand website traffic and usage patterns.</li>
          <li>Improve website functionality and performance.</li>
        </ul>
        <p className="mt-4">You can manage cookie preferences through your browser settings.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
        <p>We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p className="mb-4">You have the following rights regarding your personal information:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access your personal data.</li>
          <li>Correct or update inaccurate information.</li>
          <li>Request deletion of your data.</li>
          <li>Opt out of marketing communications.</li>
        </ul>
        <p className="mt-4">To exercise these rights, please contact us at [Insert Contact Email].</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
        <p>We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet can be guaranteed 100% secure.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
        <p>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">10. Updates to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be effective when posted on this page. We encourage you to review this policy periodically.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy or how we handle your information, please contact us:</p>
        <address className="not-italic">
          <p><strong>Crystal Cleaning Services Thiruvalla</strong></p>
          <p>Email: [Insert Email Address]</p>
          <p>Phone: [Insert Phone Number]</p>
          <p>Address: [Insert Address]</p>
        </address>
      </section>

      <p className="text-center text-lg mt-8">Thank you for trusting Crystal Cleaning Services Thiruvalla with your cleaning needs.</p>
    </div>
  );
};

export default PrivacyPolicy;
