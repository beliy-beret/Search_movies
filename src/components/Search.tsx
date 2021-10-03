import style from '../css/searchStyle.module.css'

export const Search = ({ searchingValue, handlerSearchingValue, getSearchingValue }: {
    searchingValue: string
    handlerSearchingValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    getSearchingValue: () => void
}) => (
    <div className={style.search}>
        <input className={style.field} type='search' name='search' value={searchingValue}
            placeholder='Enter title of movies' onChange={handlerSearchingValue} />
        <button className={style.submit} onClick={getSearchingValue}> Search </button>
    </div>
)