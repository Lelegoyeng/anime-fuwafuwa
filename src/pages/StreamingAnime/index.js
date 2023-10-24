import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ReactPlayer from 'react-player'

const StreamingAnime = () => {

    return (
        <div>
            <Navbar />
            <div className='justify-center px-10 py-10 bg-gray-800 overflow-y-auto'>
                <div className=' bg-black p-5 rounded'>
                    <div className='mb-5 text-white font-semibold text-2xl'>Title Episode 1 Subtitle Indonesia</div>
                    <div className='flex mb-2 text-center bg-blue-900  text-white p-2 rounded justify-between'>
                        <div className='border-2 p-1'>Previous Eps.</div>
                        <div className='border-2 p-1'>See All Episodes</div>
                        <div className='border-2 p-1'>Next Eps.</div>
                    </div>
                    <div className='flex justify-center'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                    </div>
                    <div className='flex mb-2 mt-2 text-center text-white p-2 rounded justify-between'>
                        <div className='bg-gray-600 p-2 w-full text-white font-bold rounded m-2'>Mirror 360p</div>
                        <div className='bg-blue-600 p-2 w-full text-white font-bold rounded m-2'>Mirror 480p</div>
                        <div className='bg-red-600 p-2 w-full text-white font-bold rounded m-2'>Mirror 720p</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StreamingAnime;
