import React from "react";
import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";

function AllPokemon({pokemon, next, prev}){
return(
    <section>
        <h1 className="text-4xl text-red-900 p-2 font-bold " >All Pokemon</h1>
        <PokemonList pokemon={pokemon} />
        <Pagination next={next} prev={prev} />
    </section>
    
    
);
}

export default AllPokemon;