import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GenreList = () => {
    const [genreList, setGenreList] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.0.44:5000/genrelist');
                const sortedData = response.data.sort((a, b) => {
                    const nameA = a.nama.toLowerCase();
                    const nameB = b.nama.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                setGenreList(sortedData);
            } catch (error) {
                console.error('Error fetching genre list:', error);
            }
        };
        fetchData();
    }, []);

    const filteredData = genreList
        ?.filter((value) => {
            return value.nama.toLowerCase().includes(search.toLowerCase());
        })
        .map((filteredValue) => (
            <Link
                key={filteredValue._id}
                to={{
                    pathname: `/genreList/Anime`,
                }}
                state={{
                    nama: filteredValue?.nama,
                }}
                className='flex justify-between text-gray-200  px-3 mt-1 mb-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'
            >
                <div className='text-left font-semibold'>
                    {filteredValue.nama}
                </div>
            </Link>
        ));

    return (
        <div>
            <Navbar />
            <div className='justify-center px-10 py-10 bg-gray-800 overflow-y-auto h-full w-full min-h-screen min-w-screen'>
                <div className=' bg-black p-5 rounded'>
                    <div className='flex justify-between'>
                        <div className='mb-3 text-gray-300 text-left font-bold text-lg'>Genre List </div>
                        <div className='mb-3 text-gray-300 text-left font-bold text-lg'>
                            <input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                className="w-full md:w-auto bg-gray-800 text-white p-2 rounded focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='text-gray-300'>
                        {
                            search === '' ?
                                genreList?.map(genre => (
                                    <Link
                                        key={genre._id}
                                        to={{
                                            pathname: `/genreList/Anime`,
                                        }}
                                        state={{
                                            nama: genre?.nama,
                                        }}
                                        className='flex justify-between text-gray-200  px-3 mt-1 mb-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'
                                    >
                                        <div className='text-left font-semibold'>
                                            {genre.nama}
                                        </div>
                                    </Link>
                                )) :
                                <div>{filteredData}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenreList;
