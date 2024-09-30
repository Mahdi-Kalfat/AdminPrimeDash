import { useState } from "react";
import {
  FaTachometerAlt,
  FaUserAlt,
  FaFileAlt,
  FaShopify,
} from "react-icons/fa";
import { BiHealth } from "react-icons/bi";
import { TbWall } from "react-icons/tb";
import { MdLocalPolice } from "react-icons/md";
import { GiPoliceBadge } from "react-icons/gi";
import { IoChevronDown, IoChevronUp, IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom"; // Import Link for navigation

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown

  return (
    <aside className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-semibold border-b border-gray-700 flex items-center space-x-2">
        <img
          src="src/assets/images/primeLogo.png"
          alt="Logo"
          className="h-12 w-12"
        />
        <span>PrimeAdminRp</span>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          to="/" // Link to Dashboard page
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
        >
          <FaTachometerAlt className="mr-2" />
          Dashboard
        </Link>
        <Link
          to="#" // You can define this route if you have a Users page
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
        >
          <FaUserAlt className="mr-2" />
          Users
        </Link>

        {/* Whitelist Dropdown */}
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle the dropdown
            className="flex items-center w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded focus:outline-none"
          >
            <FaFileAlt className="mr-2" />
            Whitelist
            {isOpen ? (
              <IoChevronUp className="ml-auto" />
            ) : (
              <IoChevronDown className="ml-auto" />
            )}
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="space-y-1 pl-4">
              <Link
                to="/whitelist" // Link to the whitelist page (the StatusPage component)
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <MdLocalPolice className="mr-2" />
                Whitelist
              </Link>
              <Link
                to="/police-whitelist"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <MdLocalPolice className="mr-2" />
                LSPD Whitelist
              </Link>
              <Link
                to="/EMS-whitelist"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <BiHealth className="mr-2" />
                EMS Whitelist
              </Link>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <GiPoliceBadge className="mr-2" />
                Warden Whitelist
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
              >
                <TbWall className="mr-2" />
                Keeper Whitelist
              </a>
            </div>
          )}
        </div>

        <Link
          to="#" // Link to Shop page if needed
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
        >
          <FaShopify className="mr-2" />
          Shop
        </Link>
        <Link
          to="#" // Link to Settings page if needed
          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
        >
          <IoSettingsSharp className="mr-2" />
          Settings
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
