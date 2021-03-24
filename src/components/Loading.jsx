import React from 'react';
import preloader from '../img/preloader.gif';
import '../css/loading.custom.css';
const Loading = () => {
    return (
        <div className='preloader'>
            <img alt='preloader' src={preloader} />
        </div>
    );
};

export default Loading;