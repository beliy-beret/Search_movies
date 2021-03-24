import React from 'react';
import '../css/movie.custom.css';

const Movie = (props) => {
    return (
        <div className='movie'>
            <h3> {props.title} </h3>
            <div>
                <img alt='Movie poster' src={props.poster} />
            </div>
            <p> ({props.year}) </p>
        </div>
    );
};

export default Movie;