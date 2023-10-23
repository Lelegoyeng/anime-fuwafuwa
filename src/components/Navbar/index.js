import React from 'react';
import logo from './logo.png';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between">
                {/* Logo and App Name */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img src={logo} alt="Logo" className="h-8 w-8" />
                    <span className="ml-2 text-lg font-bold">Anime Fuwafuwa</span>
                </div>

                {/* Centered Search Input */}
                <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full md:w-auto bg-gray-700 text-white p-2 rounded focus:outline-none"
                    />
                </div>

                {/* Options in the Top Right Corner */}
                <div className="flex items-center space-x-4">
                    <span className="text-gray-300">Genre List</span>
                    <span className="text-gray-300">Anime List</span>
                    <span className="text-gray-300">Ongoing</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
