import React from "react";
import {useContext} from "react"
import FavoriteContext from "../store/favorite-context";
import FavoritePokemonCard from "../components/FavoritePokemonCard";


function FavoritePokemon(){
    const favoriteCtx = useContext(FavoriteContext);

    return(
    <div className="pt-20">
    <div>
        <h1 className="text-4xl text-red-900 p-2 font-bold " >My Favorite Pokemon</h1>
    </div>
    <div className="flex flex-wrap items-center justify-evenly">
        {favoriteCtx.favorites.map(poke => <FavoritePokemonCard key={poke.id} name={poke.name} image={poke.image} id={poke.id}/>)}
    </div>
    </div>
    
        
    );
}

export default FavoritePokemon;