import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const location = useLocation(); // Get the current route location

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to get the page name based on the current path
  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/whitelist":
        return "Whitelist";
      case "/police-whitelist":
        return "Police Whitelist";
      case "/EMS-whitelist":
        return "EMS Whitelist";
      case "/users":
        return "Users";
      case "/shop":
        return "Shop";
      case "/settings":
        return "Settings";
      default:
        return "Page Not Found";
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center">
        <h1 className="text-lg text-white">
          Dashboard / {getPageName()} {/* Dynamic Page Name */}
        </h1>
      </div>
      <div className="relative flex items-center space-x-4">
        {/* Profile Image and Name */}
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src="https://via.placeholder.com/40" // Replace with actual profile image URL
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white ml-2">User Name</span>{" "}
          {/* Replace with actual user name */}
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-48 bg-black bg-opacity-80 rounded-md shadow-lg z-10">
            <ul className="py-2">
              <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                Settings
              </li>
            </ul>
          </div>
        )}

        {/* Log out Button */}
        <button className="flex items-center bg-[#4F46E5] text-white rounded-full px-4 py-2 hover:bg-[#4F46E5] transition">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
            alt="Discord Logo"
            className="h-5 w-5 mr-2"
          />
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
