import axios from "axios"
import { useState } from "react"
import { initData } from "./initData"

import { Header } from "./components/Header"
import { MoviesList } from "./components/MoviesList"
import { Loading } from "./components/Loading"
import { Search } from "./components/Search"

import './css/app.custom.css'

const App = () => {  
  const [search, setSearch] = useState(initData);
  const [loading, setLoading] = useState(false);
  const [searchingValue, setSearchingValue] = useState("");
  const handlerSearchingValue = (e: React.ChangeEvent<HTMLInputElement>) => setSearchingValue(e.target.value);
  
  const getSearchingValue = async() => {
    await setLoading(true);
    axios.get(`https://www.omdbapi.com/?s=${searchingValue.split(' ').join('+')}&apikey=4a3b711b`)     
    .then( response => { 
      if (response.data.Response === "True") {
        setSearch(response.data.Search);        
      } else {
        alert(response.data.Error)
      } setLoading(false);
    });        
  }  

  return (       
    <div className='app'>      
      <Header />
      <Search searchingValue={searchingValue} handlerSearchingValue={handlerSearchingValue} getSearchingValue={getSearchingValue} />
      {loading ? <Loading /> : <MoviesList moviesList={search} />}
    </div>
  );
}

export default App;
