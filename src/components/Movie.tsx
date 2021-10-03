import style from '../css/movieStyle.module.css'

export const Movie = ({ title, year, poster }: { title: string, year: string, poster: string }) => (
    <div className={style.movie}>
        <h3 className={style.title}> {title} </h3>
        <div className={style.poster}>
            <img alt='Movie poster' src={poster} />
        </div>
        <p className={style.year}> ({year}) </p>
    </div>
)