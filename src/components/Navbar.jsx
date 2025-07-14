import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">App Name</div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Item 1</li>
        <li className="hover:text-blue-600 cursor-pointer">Item 2</li>
        <li className="hover:text-blue-600 cursor-pointer">Item 3</li>
        <li className="hover:text-blue-600 cursor-pointer">Item 4</li>
      </ul>

      {/* Buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 border rounded-full hover:bg-gray-100">
          Connect Wallet
        </button>
        <Link
          to="/login"
          className="px-4 py-2 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full hover:bg-gradient-to-r hover:from-cyan-200 hover:via-cyan-600 hover:to-blue-700"
        >
          Launch App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
