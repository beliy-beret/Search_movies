import { MoviesListType } from '../AppTypes'

import { Movie } from './Movie'

import style from '../css/moviesListStyle.module.css'

export const MoviesList = ({moviesList}: {moviesList: MoviesListType}) => (
    <div className={style.movies}>
        <h2 className={style.title}> Movies </h2>
        <div className={style.moviesList}>
            {moviesList.map(item => <Movie key={item.imdbID} title={item.Title} year={item.Year} poster={item.Poster} />)}
        </div>
    </div>
)