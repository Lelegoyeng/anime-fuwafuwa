import React from 'react';
import Slider from 'react-slick';
import Navbar from '../../components/Navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="Home">
            <Navbar />
            <div className='justify-center px-10 py-10 bg-gray-800'>
                <div className='mb-5 text-white font-semibold text-2xl'>Recommended to you</div>
                <Slider {...settings}>
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

            <div className="text-gray-400">aaa</div>
        </div>
    );
};

export default Home;
