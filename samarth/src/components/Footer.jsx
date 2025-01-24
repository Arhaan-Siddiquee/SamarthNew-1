import { useState } from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaHome, 
  FaInfoCircle, 
  FaHandshake, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram 
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Subscribed to newsletter successfully!");
    setEmail(""); // Clear input field after success
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-white py-10">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo and Description */}
          <div>
            <a
              href="#"
              className="text-3xl font-bold text-gradient bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent"
              aria-label="Healthcare Pro Homepage"
            >
              सmarth
            </a>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Delivering reliable healthcare services with a commitment to your well-being. Your health, our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gradient bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#", label: "Home", Icon: FaHome },
                { href: "#", label: "About", Icon: FaInfoCircle },
                { href: "#", label: "Services", Icon: FaHandshake },
                { href: "#", label: "Contact", Icon: FaEnvelope },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    <link.Icon className="mr-2" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gradient bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+123456789" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  +1 (234) 567-89
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@healthcarepro.com" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  info@सmarth.com
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                123 Health St, City, Country
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold mb-4 text-gradient bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Get the latest updates and healthcare tips directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-2" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="p-3 flex-1 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-green-500 focus:border-green-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          {[
            { href: "#", Icon: FaFacebook },
            { href: "#", Icon: FaTwitter },
            { href: "#", Icon: FaInstagram },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-green-500 hover:text-green-600 transition-colors"
            >
              <social.Icon size={24} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 सmarth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
