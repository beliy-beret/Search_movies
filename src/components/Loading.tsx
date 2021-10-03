import style from '../css/loadingStyle.module.css'

export const Loading = () => {
    return (
        <div className={style.preloader}>
            <h2>Loading ...</h2>
        </div>
    )
}