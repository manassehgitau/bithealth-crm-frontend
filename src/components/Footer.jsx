import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-dark-default dark:text-white px-10 py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="text-lg font-semibold">bitHealth</h5>
          <p className="text-sm">Empowering you with smart health technology.</p>
        </div>

        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-sm hover:underline">
            Terms of Service
          </a>
          <a href="/contact-us" className="text-sm hover:underline">
            Contact Us
          </a>
        </div>

        <div className="text-sm">
          <p>© {new Date().getFullYear()} bitHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
