import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const DetailAnime = () => {
    const location = useLocation();

    const { state } = location;
    const media = state?.media;
    const title = state?.title;

    return (
        <div>
            <Navbar />
            <div>
                <h2>Detail Anime</h2>
                {media && <img src={media} alt={`Anime Media`} />}
                {title && <div>{title}</div>}
            </div>
        </div>
    );
}

export default DetailAnime;
