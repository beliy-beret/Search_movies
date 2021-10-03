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
    setLoading(true);
    let res = await axios.get('https://www.omdbapi.com/', {
      params:{
        s: searchingValue.split(' ').join('+'),
        apikey: '4a3b711b'
      }
    })     
    if (res.data.Response === "True") {
        setSearch(res.data.Search);        
      } else {
        alert(res.data.Error)
      } setLoading(false);
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