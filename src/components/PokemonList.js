import React from "react";
import PokemonItem from "./PokemonItemCard";

function PokemonList({pokemon}){
    return(
        <div className="flex flex-wrap border items-center justify-between">
            {pokemon.map((poke) => (<PokemonItem key={poke.url} poke={poke.name}/>))}
        </div>
    );
}
export default PokemonList;