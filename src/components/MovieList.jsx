import React from 'react';
import '../css/movieList.custom.css';
import Movie from './Movie';

const MovieList = (props) => {
    return (
        <div className='movieList'>
            <h2> Movies </h2>
            <div className='movies'>
                {props.movies.map( item => <Movie key={item.imdbID} title={item.Title} year={item.Year} poster={item.Poster} />)}                
            </div>            
        </div>
    );
};

export default MovieList;