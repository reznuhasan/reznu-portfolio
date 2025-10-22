"use client"
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#home');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="hidden md:flex space-x-8">
      {[
        { label: 'Home', href: '#home' },
        { label: 'About Me', href: '#about' },
        { label: 'Project', href: '#projects' },
        // { label: 'Portfolio', href: '#portfolio' },
        // { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' },
      ].map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => handleSetActive(item.href)}
          className={`px-4 py-2 font-medium rounded-full transition-colors ${
            activeSection === item.href
              ? 'bg-yellow-400 text-gray-900'
              : 'text-gray-700 hover:text-yellow-600'
          }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
