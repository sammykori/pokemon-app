import React from "react";
import PokemonItemCard from "./PokemonItemCard";


function PokemonList({pokemon}){
    console.log(pokemon)
    return(
        <div className="flex flex-wrap border items-center justify-between">
            {pokemon.map(poke => <PokemonItemCard key={poke.id} name={poke.name} image={poke.sprites.other.home.front_default} id={poke.id}/>)}
        </div>
    );
}
export default PokemonList;