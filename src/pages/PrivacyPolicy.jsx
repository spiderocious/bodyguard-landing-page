const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          This Privacy Policy explains how LuxElite (we, our, or us) collects,
          uses, discloses, and protects personal information of users of our website
          and mobile applications (the Service).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="text-gray-700 mb-2">We may collect the following types of information:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Contact information: name, email address, phone number.</li>
          <li>Account information: registration details and profile information.</li>
          <li>Usage information: logs, device and app usage data to improve the Service.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
        <p className="text-gray-700 mb-4">We use collected information to:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Provide and operate the Service.</li>
          <li>Process bookings and payments.</li>
          <li>Communicate with users about their bookings and the Service.</li>
          <li>Improve and personalize the Service.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Retention</h2>
        <p className="text-gray-700 mb-4">We retain personal data only as long as necessary to provide the Service
        and to comply with legal obligations. Users may request deletion of their
        personal data as described below.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Requests to Delete Data</h2>
        <p className="text-gray-700 mb-4">If you would like to request deletion of your personal data, please use
        our data deletion form available on the website. We will respond to
        verifiable requests within a reasonable timeframe.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
        <p className="text-gray-700 mb-4">We may use third-party services for payment processing, analytics, and
        other features. Those third parties have their own privacy policies.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Security</h2>
        <p className="text-gray-700 mb-4">We implement reasonable administrative, technical, and physical
        safeguards to protect personal information.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="text-gray-700 mb-4">If you have questions about this privacy policy or want to make a
        deletion request, please contact: support@luxElite.com</p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
