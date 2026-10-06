import React from "react";
import { Globe, MapPin, Calendar, Mail } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Globe className="mr-2" /> TripGenie
          </h3>
          <p className="text-gray-300 text-sm">
            Your personal AI-powered travel companion, creating custom
            itineraries tailored to your interests and budget.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 flex items-center">
            <Mail className="mr-2" /> Stay Connected
          </h4>
          <div className="flex space-x-4 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-3 py-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition">
              <MapPin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <Calendar size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:text-blue-400"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 pt-4 border-t border-gray-800">
        <p>&copy; 2026 TripGenie. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
