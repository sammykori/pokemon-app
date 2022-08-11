import { createContext, useState } from "react";

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritePokemon) => {},
    removeFavorite: (pokemonId) => {},
    itemFavorite: (pokemonId) => {},
})


export function FavoriteContextProvider(props){
    const[userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoritePokemon){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritePokemon)
        })
    }
    function removeFavoriteHandler(pokemonId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(pokemon => pokemon.id !== pokemonId)
        })
    }
    function itemFavoriteHandler(pokemonId){
        return userFavorites.some(pokemon => pokemon.id === pokemonId)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemFavorite: itemFavoriteHandler,
    };
    return (
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteContext;