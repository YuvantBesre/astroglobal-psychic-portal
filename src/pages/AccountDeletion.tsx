import React from "react";

const AccountDeletion: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-8 text-white">
      <h1 className="text-4xl font-bold mb-4 text-white">Account Deletion Request</h1>
      <p className="text-white/80 mb-6">
        <strong className="font-semibold text-white">Last updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <p className="text-white mb-6 leading-relaxed">
        We understand that you may wish to delete your Astroglobal account and remove your personal data from our systems. This page provides clear instructions on how to request account deletion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">How to Request Account Deletion</h2>

      <p className="text-white mb-6 leading-relaxed">
        To request the deletion of your Astroglobal account and associated personal data, please follow these steps:
      </p>

      <div className="bg-secondary/30 border border-border/50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-medium mb-4 text-white">Step 1: Send an Email</h3>
        <p className="text-white mb-4 leading-relaxed">
          Send an email to our support team at{" "}
          <a href="mailto:support@astroglobal.com" className="text-blue-400 hover:text-blue-300 underline">
            support@astroglobal.com
          </a>
          {" "}with the subject line: <strong className="font-semibold text-white">"Account Deletion Request"</strong>
        </p>

        <h3 className="text-xl font-medium mt-6 mb-4 text-white">Step 2: Provide Required Information</h3>
        <p className="text-white mb-4 leading-relaxed">
          In your email, please include the following information to help us verify your identity and process your request:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 text-white">
          <li><strong className="font-semibold text-white">Full Name:</strong> The name associated with your Astroglobal account</li>
          <li><strong className="font-semibold text-white">Phone Number:</strong> The phone number registered with your account</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">What Happens After Your Request</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-secondary/30 border border-border/50 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3 text-white">Verification Process</h3>
          <p className="text-white mb-4 leading-relaxed">
            Once we receive your deletion request, our support team will verify your identity using the information you provided (Name and Phone number). This verification step is essential to protect your account from unauthorized deletion requests.
          </p>
        </div>

        <div className="bg-secondary/30 border border-border/50 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3 text-white">Processing Time</h3>
          <p className="text-white mb-4 leading-relaxed">
            After verification, we will process your account deletion request within <strong className="font-semibold text-white">7-10 business days</strong>. You will receive a confirmation email once your account and associated data have been permanently deleted from our systems.
          </p>
        </div>

        <div className="bg-secondary/30 border border-border/50 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3 text-white">Data Deletion</h3>
          <p className="text-white leading-relaxed">
            Upon successful deletion, the following data will be permanently removed:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-white">
            <li>Your personal information (name, email, phone number, address)</li>
            <li>Your profile picture and uploaded images</li>
            <li>Your account settings and preferences</li>
            <li>Your app usage history and activity data</li>
            <li>All other data associated with your account</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Important Information</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-secondary/30 border border-border/50 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3 text-white">Irreversible Action</h3>
          <p className="text-white leading-relaxed">
            Please note that account deletion is <strong className="font-semibold text-white">permanent and irreversible</strong>. Once your account is deleted, you will not be able to recover any data, including:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-white">
            <li>Your astrology readings and reports</li>
            <li>Your consultation history</li>
            <li>Your purchase history and receipts</li>
            <li>Any saved preferences or customizations</li>
          </ul>
        </div>

        <div className="bg-secondary/30 border border-border/50 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3 text-white">Legal Requirements</h3>
          <p className="text-white leading-relaxed">
            In some cases, we may be required to retain certain information for legal or regulatory purposes (such as transaction records for tax compliance). However, such data will be retained only as long as legally required and will not be used for any other purpose.
          </p>
        </div>

        <div className="bg-secondary/30 border border-border/50 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3 text-white">Alternative Options</h3>
          <p className="text-white leading-relaxed">
            If you're not sure about permanent deletion, you may consider:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-white">
            <li>Temporarily disabling your account (contact support for this option)</li>
            <li>Updating your privacy settings to limit data collection</li>
            <li>Unsubscribing from notifications while keeping your account active</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Contact Support</h2>

      <p className="text-white mb-4 leading-relaxed">
        If you have any questions about the account deletion process or need assistance with your request, please don't hesitate to contact our support team.
      </p>

      <div className="bg-secondary/30 border border-border/50 rounded-lg p-6 mb-8">
        <p className="text-white leading-relaxed">
          <strong className="font-semibold text-white">Email:</strong>{" "}
          <a href="mailto:support@astroglobal.com" className="text-blue-400 hover:text-blue-300 underline">
            support@astroglobal.com
          </a>
          <br />
          <strong className="font-semibold text-white">Response Time:</strong> We typically respond to account deletion requests within 24-48 hours.
        </p>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
        <p className="text-white leading-relaxed">
          <strong className="font-semibold text-white">Quick Summary:</strong> To delete your account, send an email to{" "}
          <a href="mailto:support@astroglobal.com" className="text-blue-400 hover:text-blue-300 underline">
            support@astroglobal.com
          </a>
          {" "}with your <strong className="font-semibold text-white">Name</strong> and <strong className="font-semibold text-white">Phone number</strong>. We'll verify your identity and process your request within 7-10 business days.
        </p>
      </div>
    </main>
  );
};

export default AccountDeletion;
