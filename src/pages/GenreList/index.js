import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GenreList = () => {
    const [genreList, setGenreList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.0.44:5000/genrelist');
                setGenreList(response.data);
            } catch (error) {
                console.error('Error fetching genre list:', error);
            }
        };
        fetchData(); // Panggil fungsi fetchData saat komponen dipasang
    }, []);

    return (
        <div>
            <Navbar />
            <div className='justify-center px-10 py-10 bg-gray-800 overflow-y-auto h-full w-full min-h-screen min-w-screen'>
                <div className=' bg-black p-5 rounded'>
                    <div className='mb-3 text-gray-300 text-left font-bold text-lg'>Genre List </div>
                    <div className='text-gray-300'>
                        {genreList.map(genre => (
                            <Link
                                key={genre._id}
                                to={{
                                    pathname: `/streamingAnime/${genre._id}`,
                                }}
                                className='flex justify-between text-gray-200  px-3 mt-1 mb-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'
                            >
                                <div className='text-left font-semibold'>
                                    {genre.nama}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenreList;
