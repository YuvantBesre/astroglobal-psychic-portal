import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
      <p className="text-white/80 mb-6">
        <strong className="font-semibold text-white">Last updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <p className="text-white mb-4 leading-relaxed">
        SLOWWLIFE PRIVATE LIMITED ("Company", "we", "our", or "us") operates the{" "}
        <strong className="font-semibold text-white">Astroglobal</strong> mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
      </p>

      <p className="text-white mb-8 leading-relaxed">
        By using Astroglobal, you agree to the collection and use of information in accordance with this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Information We Collect</h2>

      <p className="text-white mb-6 leading-relaxed">
        We collect information that you voluntarily provide to us and information automatically generated through your use of the App.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3 text-white">1.1 Personal Information</h3>
      <p className="text-white mb-3 leading-relaxed">We may collect the following personal information:</p>
      <ul className="list-disc list-inside mb-6 space-y-2 text-white">
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Profile picture</li>
        <li>Address (for delivery of astrology-related products)</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3 text-white">1.2 User Content</h3>
      <p className="text-white mb-6 leading-relaxed">
        Images uploaded by users (for profile or other app features)
      </p>

      <h3 className="text-xl font-medium mt-6 mb-3 text-white">1.3 Authentication Information</h3>
      <ul className="list-disc list-inside mb-6 space-y-2 text-white">
        <li>Phone number for OTP-based login</li>
        <li>Google account details for social login</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-3 text-white">1.4 Payment Information</h3>
      <p className="text-white mb-8 leading-relaxed">
        Payments made within the App are processed securely by Razorpay.
        <br />
        We do not store or process your debit card, credit card, or banking information. All payment details are handled directly by the payment gateway.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Information We Do Not Collect</h2>
      <ul className="list-disc list-inside mb-8 space-y-2 text-white">
        <li>Precise or approximate location data</li>
        <li>Cookies or browser-based tracking</li>
        <li>Advertising identifiers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. How We Use Your Information</h2>
      <p className="text-white mb-3 leading-relaxed">We use the collected information to:</p>
      <ul className="list-disc list-inside mb-8 space-y-2 text-white">
        <li>Create and manage user accounts</li>
        <li>Authenticate users and provide secure login</li>
        <li>Deliver astrology services and related content</li>
        <li>Process orders and deliver astrology-related products</li>
        <li>Send OTPs, transaction confirmations, and service-related notifications</li>
        <li>Send push notifications related to app activity</li>
        <li>Improve app performance and user experience</li>
        <li>Ensure security, prevent fraud, and comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Communications</h2>
      <p className="text-white mb-3 leading-relaxed">We may communicate with you via:</p>
      <ul className="list-disc list-inside mb-4 space-y-2 text-white">
        <li>SMS (OTP, order updates)</li>
        <li>Email (receipts, important service information)</li>
        <li>Push notifications</li>
      </ul>
      <p className="text-white mb-8 leading-relaxed">
        We do not send promotional or marketing messages without user consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Third-Party Services</h2>
      <p className="text-white mb-3 leading-relaxed">
        We use trusted third-party services to operate and improve our App:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2 text-white">
        <li>Firebase – authentication, notifications, app performance</li>
        <li>AWS (Amazon Web Services) – backend infrastructure and storage</li>
        <li>Razorpay – payment processing</li>
        <li>Amazon SES – transactional emails</li>
        <li>Amazon SNS / SMS services – OTPs and alerts</li>
      </ul>
      <p className="text-white mb-8 leading-relaxed">
        These service providers are contractually obligated to protect your data and use it only for providing services to us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Data Sharing & Disclosure</h2>
      <p className="text-white mb-4 leading-relaxed">
        We do not sell, rent, or trade your personal data.
      </p>
      <p className="text-white mb-3 leading-relaxed">Your information may be shared only:</p>
      <ul className="list-disc list-inside mb-8 space-y-2 text-white">
        <li>With service providers strictly for app functionality</li>
        <li>When required by law or legal process</li>
        <li>To protect the rights, safety, or property of users or the Company</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Data Retention</h2>
      <p className="text-white mb-3 leading-relaxed">We retain personal data only for as long as:</p>
      <ul className="list-disc list-inside mb-4 space-y-2 text-white">
        <li>Your account remains active, or</li>
        <li>Required to fulfill the purposes outlined in this policy, or</li>
        <li>Required by applicable laws</li>
      </ul>
      <p className="text-white mb-8 leading-relaxed">
        Once data is no longer needed, it is securely deleted or anonymized.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. User Rights</h2>
      <p className="text-white mb-3 leading-relaxed">You have the right to:</p>
      <ul className="list-disc list-inside mb-4 space-y-2 text-white">
        <li>Access your personal data</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your account and personal data</li>
        <li>Withdraw consent where applicable</li>
      </ul>
      <p className="text-white mb-8 leading-relaxed">
        To exercise these rights, contact us at{" "}
        <a href="mailto:support@astroglobal.com" className="text-blue-400 hover:text-blue-300 underline">
          support@astroglobal.com
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">9. Data Security</h2>
      <p className="text-white mb-4 leading-relaxed">
        We implement appropriate technical and organizational security measures to protect your data against unauthorized access, loss, misuse, or alteration.
      </p>
      <p className="text-white mb-8 leading-relaxed">
        However, no digital system is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">10. Children's Privacy</h2>
      <p className="text-white mb-4 leading-relaxed">
        Astroglobal is not intended for children under the age of 13.
      </p>
      <p className="text-white mb-8 leading-relaxed">
        We do not knowingly collect personal data from children. If such data is discovered, it will be deleted immediately.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">11. International Users</h2>
      <p className="text-white mb-4 leading-relaxed">
        Currently, Astroglobal primarily serves users in India.
      </p>
      <p className="text-white mb-8 leading-relaxed">
        As we expand globally, your data may be processed in countries other than your own, subject to applicable data protection laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">12. Compliance With Laws</h2>
      <p className="text-white mb-3 leading-relaxed">This Privacy Policy complies with:</p>
      <ul className="list-disc list-inside mb-8 space-y-2 text-white">
        <li>Information Technology Act, 2000 (India)</li>
        <li>GDPR (European Union)</li>
        <li>CCPA (California, USA)</li>
        <li>Google Play Developer Policy</li>
        <li>Apple App Store Review Guidelines</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">13. Changes to This Privacy Policy</h2>
      <p className="text-white mb-4 leading-relaxed">
        We may update this Privacy Policy from time to time.
      </p>
      <p className="text-white mb-8 leading-relaxed">
        Any changes will be reflected with an updated "Last updated" date. Continued use of the App after changes constitutes acceptance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">14. Contact Us</h2>
      <p className="text-white mb-4 leading-relaxed">
        If you have questions, concerns, or requests regarding this Privacy Policy or your data, contact us at:
      </p>
      <p className="text-white leading-relaxed">
        <strong className="font-semibold text-white">SLOWWLIFE PRIVATE LIMITED</strong>
        <br className="mb-2" />
        <span className="text-white">📧 </span>
        <a href="mailto:support@astroglobal.com" className="text-blue-400 hover:text-blue-300 underline">
          support@astroglobal.com
        </a>
        <br className="mb-2" />
        <span className="text-white">🌐 </span>
        <a href="https://astroglobal.com/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline">
          https://astroglobal.com/
        </a>
      </p>
    </main>
  );
};

export default PrivacyPolicy;
