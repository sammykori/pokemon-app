import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainNavigations from "./components/navigations/MainNavigation";
import AllPokemon from "./pages/AllPokemon";
import DetailPokemon from "./pages/DetailPokemon";
import FavoritePokemon from "./pages/FavoritePokemon";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //This state holds the data
  const [pokemon, setPokemon] = useState([])

  // These three states controls pagination
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextPageURL, setNextPageURL] = useState()
  const [prevPageURL, setPrevPageURL] = useState()

  //This state controls the loader
  const [loading, setLoading] = useState()

  //fetch data from the API
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageURL, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(function (res) {
      setLoading(false)
      setNextPageURL(res.data.next)
      setPrevPageURL(res.data.previous)
      // setPokemon(res.data.results)
      const data = res.data.results
      //fetch image of the pokemon
      createPokemonObject(data)

    }).catch(function(error){
      console.log(error)
    });
    return () => cancel()
  }, [currentPageURL])

  function createPokemonObject(result){
    result.forEach(async(poke) => {
      axios.get(currentPageURL+poke.name)
      .then(function (res){
        setPokemon(currentList => [...currentList, res.data])
      })
      .catch(function(error){
        console.log(error)
      } ) 
    })
  }
// Render Loading until while getting data
if (loading) return "Loading..."

//Go to next page 
function nextPage(){
  setCurrentPageURL(nextPageURL);
}

//Go to prev page
function prevPage(){
  setCurrentPageURL(prevPageURL);
}
  return (
    <div>
      <BrowserRouter>
        <MainNavigations/>
        <Routes>
          <Route path="/" exaact={true} element={<AllPokemon pokemon={pokemon} next={nextPageURL ? nextPage : null} prev={prevPageURL ? prevPage : null} />}/>
          <Route path="/detail" exaact={true} element={<DetailPokemon />} />
          <Route path="/favorites" exaact={true} element={<FavoritePokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
