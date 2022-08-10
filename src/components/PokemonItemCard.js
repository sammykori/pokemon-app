import React from "react";
import { HeartIcon } from '@heroicons/react/solid'

function PokemonItemCard(props){
    return(
            <div className="basis-1/5 w-10 h-50 border m-2 rounded-xl">
                <div className="w-max-w-0 h-40 border rounded-t-xl"></div>
                <div className="flex flex-row border rounded-b-xl items-center justify-between pl-4 pr-4">
                    <h1 className="text-2xl text-current text-center">{props.poke}</h1> 
                    <HeartIcon className="h-8 w-8 text-red-900"/>
                </div>   
            </div>

    );
}
export default PokemonItemCard;