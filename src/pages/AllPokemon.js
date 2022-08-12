import React, { useState } from "react";
import Pagination from "../components/Pagination";
import PokemonItemCard from "../components/PokemonItemCard";
import Search from "../components/Search";
import DetailPokemon from "./DetailPokemon";

function AllPokemon({pokemon, next, prev, onSearch, infoPokemon, pokeId}){
    const [pokeDex, setPokeDex] = useState()
    const [compare, setCompare] = useState();
    
return(
    <section className="h-screen grid grid-cols-2 gap-6 mx-auto px-4 pt-20 pb-4">
        <div className="h-full overflow-y-auto">
            <div className="flex justify-between pl-20 pr-20 items-center">
                <h1 className="text-2xl text-red-900 p-2 font-bold " >All Pokemon</h1>
                <Search onSearchChange ={onSearch} />
            </div>
            <div>
                <div className="flex flex-wrap items-center justify-between">
                    {pokemon.map(poke => <PokemonItemCard key={poke.id}  pokemon={poke} infoPokemon={poke=>setPokeDex(poke)} makeCompare={com=>setCompare(com)}/> )}
                </div>
                <Pagination next={next} prev={prev} />
            </div>
        </div>
        <div className="flex flex-col flex-none">
            <DetailPokemon index={pokeDex} />
            <DetailPokemon index={compare}/>
        </div>
    </section> 
    
    
);
}

export default AllPokemon;