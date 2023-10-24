import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

import ReactPlayer from 'react-player'

const StreamingAnime = () => {
    const location = useLocation();

    const { state } = location;
    const media = state?.media;
    const title = state?.title;

    const [linkStreaming, setLinkStreaming] = useState(false)
    const HandlerLinKStreaming = () => {
        if (linkStreaming === false) return setLinkStreaming(true);
        if (linkStreaming === true) return setLinkStreaming(false);
    }

    return (
        <div>
            <Navbar />
            <div className='justify-center px-10 py-10 bg-gray-800 overflow-y-auto'>
                <div className=' bg-black p-5 rounded'>
                    <div className='mb-5 text-white font-semibold text-2xl'>Title Episode 1 Subtitle Indonesia</div>
                    <div className='flex mb-2 text-center bg-blue-900  text-white p-2 rounded justify-between'>
                        <div className='border-2 p-1 cursor-pointer hover:bg-black transition-colors duration-300 ease-in-out'>Previous Eps.</div>
                        <Link
                            to={{
                                pathname: '/detailAnime',
                            }}
                            state={{
                                media: media,
                                title: title
                            }}
                            className='border-2 p-1 cursor-pointer hover:bg-black transition-colors duration-300 ease-in-out'
                        > See All Episodes </Link>
                        <div className='border-2 p-1 cursor-pointer hover:bg-black transition-colors duration-300 ease-in-out'>Next Eps.</div>

                    </div>
                    <div className='flex justify-center'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                    </div>
                    <div className='flex mb-2 mt-2 text-center text-white p-2 rounded justify-between'>
                        <div className='bg-gray-600 p-2 w-full text-white font-bold rounded m-2'>Mirror 360p</div>
                        <div className='bg-blue-600 p-2 w-full text-white font-bold rounded m-2'>Mirror 480p</div>
                        <div className='bg-red-600 p-2 w-full text-white font-bold rounded m-2'>
                            <div
                                onClick={HandlerLinKStreaming}
                                className='mb-3 cursor-pointer '>Mirror 720p
                            </div>
                            {
                                linkStreaming === true && (
                                    <div>
                                        <div className='mt-1 text-gray-200 font-bold text-sm border-2 p-1 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'>
                                            Google Drive
                                        </div>
                                        <div className='mt-1 text-gray-200 font-bold text-sm border-2 p-1 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'>
                                            Mega
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StreamingAnime;
