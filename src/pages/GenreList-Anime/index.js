import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import axios from 'axios';

const GenreListAnime = () => {
    const location = useLocation();
    const { state } = location;
    const nama = state?.nama;

    return (
        <div>
            <Navbar />
            <div className='justify-center px-10 py-10 bg-gray-800 overflow-y-auto h-full w-full min-h-screen min-w-screen'>
                <div className=' bg-black p-5 rounded'>
                    <div className='flex justify-between'>
                        <div className='mb-5 text-white font-semibold text-2xl'>Anime <span className='font-bold'>{nama}</span> </div>
                        <div className='mb-3 text-gray-300 text-left font-bold text-lg'>
                            Search
                        </div>
                    </div>
                    <div className='text-gray-300'>
                        aaa
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenreListAnime;
