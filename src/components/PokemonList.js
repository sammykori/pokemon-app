import React from "react";
import PokemonItem from "./PokemonItemCard";

function PokemonList({pokemon}){
    return(
        <div className="flex flex-wrap border items-center justify-between">
            {pokemon.map((poke) => (<PokemonItem key={poke.id} name={poke.name} image={poke.sprites.other.home.front_default}/>))}
        </div>
    );
}
export default PokemonList;