import React from 'react';
import '../css/search.custom.css';

const Search = (props) => {
    return (
        <div className='search'>
            <input type='search' name='search' value={props.searchingValue}
             placeholder='Enter title of movies' onChange={props.handlerSearchingValue} />
             <button onClick={props.getSearchingValue}> Search </button>    
        </div>
    );
};

export default Search;