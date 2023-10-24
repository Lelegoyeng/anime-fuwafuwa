import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const DetailAnime = () => {
    const location = useLocation();

    const { state } = location;
    const media = state?.media;
    const title = state?.title;

    return (
        <div>
            <Navbar />
            <div className='justify-center px-10 py-10 bg-gray-800 overflow-y-auto'>

                <div className=' bg-black p-5 rounded'>
                    <div className=' mb-2 bg-blue-900 text-center text-white p-1 rounded font-bold '>
                        {title} Subtitle Indonesia
                    </div>
                    <div className='mb-3 text-gray-300 text-left font-bold text-lg'>Streaming {title} </div>
                    <div className='flex flex-col gap-5 md:flex-row'>
                        <div className='mr-5'>
                            {media && <img className='mx-auto rounded' src={media} alt={`Anime Media`} />}
                        </div>
                        <div className='w-full'>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Judul</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : {title} </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Japanese</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : 進撃の巨人 </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Skor</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : 8.54 </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Produser</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : Production I.G, Dentsu, Mainichi Broadcasting System, Pony Canyon, Kodansha, Pony Canyon Enterprises </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Type</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : TV </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Status</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : Completed </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Total Episode</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : 25 </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Durasi</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : 23 Menit </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Studio</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : Wit Studio </div>
                            </div>
                            <div className='flex justify-between gap-1'>
                                <div className='text-left text-gray-300 font-bold w-2/12'>Genre</div>
                                <div className='text-left text-gray-300 font-bold w-10/12'> : Action, Award Winning, Drama, Suspense </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 mb-2 bg-gray-600 text-white p-1 rounded font-bold'>
                        {title} Episode List
                    </div>

                    <div className='text-gray-300'>
                        <Link
                            to={{
                                pathname: '/streamingAnime',
                            }}
                            className='flex justify-between text-gray-200 bg-blue-500 px-3 mt-1 mb-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'
                        >
                            <div className='text-left font-bold'>
                                Episode 1
                            </div>
                            <div className='text-sm'>13 Oktober 2023</div>
                        </Link>
                        <Link
                            to={{
                                pathname: '/streamingAnime',
                            }}
                            className='flex justify-between text-gray-200 bg-blue-500 px-3 mt-1 mb-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'
                        >
                            <div className='text-left font-bold'>
                                Episode 1
                            </div>
                            <div className='text-sm'>13 Oktober 2023</div>
                        </Link>
                        <Link
                            to={{
                                pathname: '/streamingAnime',
                            }}
                            className='flex justify-between text-gray-200 bg-blue-500 px-3 mt-1 mb-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'
                        >
                            <div className='text-left font-bold'>
                                Episode 1
                            </div>
                            <div className='text-sm'>13 Oktober 2023</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DetailAnime;
