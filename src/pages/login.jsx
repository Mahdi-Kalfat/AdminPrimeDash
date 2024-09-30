import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Login() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleLoginClick = () => {
    navigate("/dashboard"); // Redirect to Dashboard page
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Full-Screen Video Player */}
      <video
        className="h-full w-full object-cover" // Ensure the video covers the entire area
        loop // Loop the video
        autoPlay // Autoplay the video
        muted // Mute the video
        playsInline // Play inline on mobile devices
        src="src\assets\Videos\gta_e5kcac.mp4" // Example video URL
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay (becomes lighter when button is hovered) */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isHovered ? "opacity-20" : "opacity-60"
        }`}
      ></div>

      {/* "Prime Admin" Text in Top-Left */}
      <header className="absolute top-0 left-0 p-4 flex items-center">
        <h1 className="text-white text-3xl font-bold">
          <span className="text-pink-500 ml-10">P</span>rime Admin
        </h1>
      </header>

      {/* Centered Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Log in with Discord Button */}
        <button
          className="flex items-center bg-gray-800 text-white rounded-full px-6 py-3 text-lg transition-all transform hover:scale-105 hover:bg-[#4F46E5] hover:text-white hover:shadow-[0_0_15px_3px_rgba(79,70,229,0.7)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleLoginClick} // Redirect to dashboard when clicked
        >
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
            alt="Discord Logo"
            className="h-6 w-6 mr-2 grayscale transition-all"
          />
          Log in with Discord
        </button>
      </div>
    </div>
  );
}

export default Login;
