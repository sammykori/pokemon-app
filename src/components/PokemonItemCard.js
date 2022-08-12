import React from "react";
import {useContext, useState} from "react"
import { HeartIcon } from '@heroicons/react/solid'
import { SwitchHorizontalIcon } from '@heroicons/react/solid'
import FavoriteContext from "../store/favorite-context"

function PokemonItemCard(props){
    const favoriteCtx = useContext(FavoriteContext);
    const [compareToggle, setCompareToggle] = useState(false)

    const itemIsFavorite = favoriteCtx.itemFavorite(props.pokemon.id)

    function toggleFavorites(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.pokemon.id);
        } else{
            favoriteCtx.addFavorite(
                {
                    id: props.pokemon.id,
                    name: props.pokemon.name,
                    image: props.pokemon.sprites.other.home.front_default,
                }
            );
        }
        }
        function detailHandle(){
            props.infoPokemon(props.pokemon)
            setCompareToggle(true)
        }
        function compareHandle(){
            props.makeCompare(props.pokemon)
        }
    return(
            <div className="basis-1/5 w-10 h-30 m-2 rounded-xl shadow-lg">
                    <div 
                    style={{
                    backgroundImage: `url(${props.pokemon.sprites.other.home.front_default})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain"
                    }} 
                    className="flex flex-row justify-between w-max-w-0 h-20 rounded-t-xl p-1" onClick={detailHandle}>
                        {compareToggle?<SwitchHorizontalIcon onClick={compareHandle}  className={"hover:cursor-pointer h-4 w-4 text-green-600"}/>: null}
                        <HeartIcon onClick={toggleFavorites} className={itemIsFavorite?"hover:cursor-pointer h-4 w-4 text-blue":"hover:cursor-pointer h-4 w-4 text-red-900"}/>
                    </div>
                
                <div className="flex flex-row border rounded-b-xl items-center justify-between pl-4 pr-4">
                        <h1 className="text-md text-current text-center" onClick={detailHandle}>{props.pokemon.name}</h1> 
                </div>  
            </div>

    );
}
export default PokemonItemCard;