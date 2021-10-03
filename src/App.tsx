import axios from "axios";
import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import { Loading } from "./components/Loading"
import './css/app.custom.css';
import { initData } from "./initData";

const App = () => {  
  const [search, setSearch] = useState(initData);
  const [loading, setLoading] = useState(false);
  const [searchingValue, setSearchingValue] = useState("");
  const handlerSearchingValue = (e) => setSearchingValue(e.target.value);
  
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
      {loading ? <Loading /> : <MovieList movies={search} />}
    </div>
  );
}

export default App;
