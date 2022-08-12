import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainNavigations from "./components/navigations/MainNavigation";
import AllPokemon from "./pages/AllPokemon";
import DetailPokemon from "./pages/DetailPokemon";
import FavoritePokemon from "./pages/FavoritePokemon";
import { useState, useEffect } from "react";
import axios from "axios";
import { FavoriteContextProvider } from "./store/favorite-context"
import _ from 'lodash'

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
      setNextPageURL(res.data.next)
      setPrevPageURL(res.data.previous)
      // setPokemon(res.data.results)
      let data = res.data.results
      //fetch image of the pokemon
      // setPokemon(data)

      function createPokemonObject(result){
        result.forEach((poke) => {
          axios.get(poke.url)
          .then(function (results){
            setPokemon(currentList => [...currentList, results.data])
          })
          .catch(function(error){
            console.log(error)
          } ) 
        })
      }

      createPokemonObject(data)

      setLoading(false)
    }).catch(function(error){
      console.log(error)
    });
    return () => cancel()
  }, [currentPageURL])

  //Go to next page 
function nextPage(){
  setPokemon([])
  setCurrentPageURL(nextPageURL);
}

//Go to prev page
function prevPage(){
  setPokemon([])
  setCurrentPageURL(prevPageURL);
}
function onSearchChange(){
  const filtered = _.filter(pokemon, (poke) => {
    return 1;
 })
}
// Render Loading until while getting data
if (loading) return "Loading..."

  return (
    <div>
      <FavoriteContextProvider>
        <BrowserRouter>
          <MainNavigations/>
          <Routes>
            <Route path="/" exact={true} element={<AllPokemon pokemon={pokemon} next={nextPageURL ? nextPage : null} prev={prevPageURL ? prevPage : null} onSearch={onSearchChange}/>}/>
            <Route path="/detail" exact={false} element={<DetailPokemon />} >
              <Route path=":id" exact={false} element={<DetailPokemon/>}/>
            </Route>
            <Route path="/favorites" exact={true} element={<FavoritePokemon />} />
          </Routes>
        </BrowserRouter>
      </FavoriteContextProvider>
    </div>
  );
}

export default App;
