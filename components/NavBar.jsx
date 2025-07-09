import React from "react";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "/about" },
  { name: "Forum", href: "/forum" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => (
  <nav className="flex justify-between items-center px-8 py-5 text-gray-300 font-semibold text-sm relative z-20 bg-[#0a0a14]">
    {/* Left Section - Logo */}
    <div className="flex items-center space-x-2">
      <div className="w-7 h-7 bg-gradient-to-tr from-pink-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg select-none">
        M
      </div>
      <span className="text-white text-lg font-bold">MorfedNews</span>
    </div>

    {/* Middle Section - Navigation Links */}
    <div className="hidden md:block">
      <ul className="flex space-x-6">
        {menuItems.map((item) => (
          <li key={item.name} className={item.badge ? "relative group" : ""}>
            <a
              href={item.href}
              className={`${
                item.isActive
                  ? "px-3 py-1 rounded-md bg-purple-700 text-white"
                  : "hover:text-purple-400 transition-all"
              } ${item.badge ? "flex items-center" : ""}`}
            >
              {item.name}
              {item.badge && (
                <span className="ml-1 bg-gray-700 text-gray-300 text-xs rounded-full px-2 py-0.5 font-normal">
                  {item.badge}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Right Section - Auth Buttons */}
    <div className="flex items-center space-x-6">
      <a
        href="/auth/signin"
        className="flex items-center space-x-2 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 px-4 py-2 text-black font-semibold shadow-md hover:brightness-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span>Join Free</span>
      </a>
    </div>
  </nav>
);

export default NavBar;