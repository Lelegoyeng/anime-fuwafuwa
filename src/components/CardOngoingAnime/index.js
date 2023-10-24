import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardOnGoingAnime = (props) => {
    const { title, media, key, OnClick, linkTo } = props;

    return (
        <Link
            to={linkTo}
        >
            <div
                key={key}
                onClick={OnClick}
            >
                <img className='rounded-lg' src={media} alt={title} style={{ width: '120px' }} />
                <div className='text-white font-semibold text-lg mt-2'>{title}</div>
            </div>
        </Link>


    )
}

export default CardOnGoingAnime