import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const OngoingList = [
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
    {
        title: 'Attack On Titan',
        media: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
    },
]

const Home = () => {
    const SliderBanners = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div>
            <Navbar />
            {/* Slider Anime*/}
            <div className='justify-center px-10 py-10 bg-gray-800 overflow-y-auto'>
                <div className='bg-black p-5 rounded'>
                    <div className='mb-5 text-white font-semibold text-2xl'>Recommended to you</div>
                    <Slider {...SliderBanners}>
                        <div className="slider-item">
                            <img
                                className="rounded-lg w-full h-60 object-cover"
                                src='https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg'
                                alt="Slide 1"
                            />
                            <div className="slider-text mt-2">
                                <h3 className="text-gray-400 text-xl font-bold">Anime Title 1</h3>
                                <p className="text-gray-300">Description for Anime Title 1</p>
                            </div>
                        </div>
                        <div className="slider-item">
                            <img
                                className="rounded-lg w-full h-60 object-cover"
                                src='https://s4.anilist.co/file/anilistcdn/media/anime/banner/151970-Tnnfp0f7NOzj.jpg'
                                alt="Slide 2"
                            />
                            <div className="slider-text mt-2">
                                <h3 className="text-gray-400 text-xl font-bold">Anime Title 2</h3>
                                <p className="text-gray-300">Description for Anime Title 2</p>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
            {/* Anime Ongoing */}
            <div className='px-10 py-10 bg-gray-800'>
                <div className='flex justify-between mb-5 bg-black p-3 rounded'>
                    <div className=' text-gray-200 font-semibold text-2xl'>Ongoing Anime</div>
                    <div className='text-gray-200 font-bold text-sm bg-blue-500 p-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'>
                        View All
                    </div>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        480: { slidesPerView: 3, spaceBetween: 30 },
                        640: { slidesPerView: 5, spaceBetween: 40 },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        OngoingList?.map((get, index) =>
                            <SwiperSlide
                                key={index}
                            >
                                <Link
                                    to={{
                                        pathname: '/detailAnime',

                                    }}
                                    state={{
                                        media: get?.media,
                                        title: get?.title
                                    }}
                                >
                                    <img className='rounded-lg' src={get?.media} alt={`slide-${index}`} />
                                    <div className='text-white font-semibold text-lg mt-2'>{get?.title}</div>
                                </Link>

                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

            {/* Anime Completed */}
            <div className='px-10 py-10 bg-gray-800'>
                <div className='flex justify-between mb-5 bg-black p-3 rounded'>
                    <div className=' text-gray-200 font-semibold text-2xl'>Completed Anime</div>
                    <div className='text-gray-200 font-bold text-sm bg-blue-500 p-2 rounded cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out'>
                        View All
                    </div>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        480: { slidesPerView: 3, spaceBetween: 30 },
                        640: { slidesPerView: 5, spaceBetween: 40 },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        OngoingList?.map((get, index) =>
                            <SwiperSlide
                                key={index}
                            >
                                <Link
                                    to={{
                                        pathname: '/detailAnime',

                                    }}
                                    state={{
                                        media: get?.media,
                                        title: get?.title
                                    }}
                                >
                                    <img className='rounded-lg' src={get?.media} alt={`slide-${index}`} />
                                    <div className='text-white font-semibold text-lg mt-2'>{get?.title}</div>
                                </Link>

                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div >
    );
};

export default Home;
