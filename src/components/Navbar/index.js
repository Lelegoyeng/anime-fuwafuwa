import React, { useState, useEffect } from 'react';
import logo from './logo.png';

const Navbar = () => {
    const [isGenreListOpen, setIsGenreListOpen] = useState(false);

    const toggleGenreList = () => {
        setIsGenreListOpen(!isGenreListOpen);
    };

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
                <div className="flex items-center space-x-4 relative">
                    {/* Dropdown for Genre List */}
                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            className="text-gray-300 hover:text-white" // Tambahkan hover disini
                            onClick={toggleGenreList}
                        >
                            Genre List
                        </button>
                        {/* Dropdown Content */}
                        {isGenreListOpen && (
                            <div className="absolute bg-gray-800 text-white p-2 space-y-2 rounded overflow-y-auto max-h-48">
                                {/* Dropdown Items */}
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Action</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Romance</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Comedy</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Adventure</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Drama</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Slice of Life</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Fantasy</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Supernatural</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Horor</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Mystery</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Psychological</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Sci-Fi</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Mecha</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Harem</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Reverse Harem</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Isekai</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Reverse Isekai</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Demons</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Game</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Ecchi</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Historical</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Kids</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Martial Art</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Josei</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Cyberpunk</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Post-Apocalyptic</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Police</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Parody</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Music</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">School</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Super Power</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Space</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Shounen</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Shoujo</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Seinen</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Sports</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Tragedy</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Vampire</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Yaoi/Shounen-Ai</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Yuri/Shoujo-Ai</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Magic</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Military</span>
                                <span className="block hover:bg-gray-700 py-1 px-2 rounded">Henta*</span>
                                {/* Add more genres as needed */}
                            </div>
                        )}
                    </div>

                    {/* Button for Anime List */}
                    <button type="button" className="text-gray-300 hover:text-white "> {/* Tambahkan hover disini */}
                        Anime List
                    </button>

                    {/* Button for Ongoing */}
                    <button type="button" className="text-gray-300 hover:text-white"> {/* Tambahkan hover disini */}
                        Ongoing
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
