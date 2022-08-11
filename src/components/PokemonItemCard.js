import React from "react";
import {useContext} from "react"
import { HeartIcon } from '@heroicons/react/solid'
import FavoriteContext from "../store/favorite-context"

function PokemonItemCard(props){
    const favoriteCtx = useContext(FavoriteContext);

    const itemIsFavorite = favoriteCtx.itemFavorite(props.id)

    function toggleFavorites(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id);
        } else{
            favoriteCtx.addFavorite(
                {
                    id: props.id,
                    name: props.name,
                    image: props.image,
                }
            );
        }
        }
    return(
            <div className="basis-1/5 w-10 h-50 border m-2 rounded-xl">
                <div 
                style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain"
                }} 
                className="w-max-w-0 h-40 border rounded-t-xl"></div>
                <div className="flex flex-row border rounded-b-xl items-center justify-between pl-4 pr-4">
                    <h1 className="text-2xl text-current text-center">{props.name}</h1> 
                    {/* <button className="">{itemFavorite? }</button> */}
                    <HeartIcon onClick={toggleFavorites} className={itemIsFavorite?"hover:cursor-pointer h-8 w-8 text-blue":"hover:cursor-pointer h-8 w-8 text-red-900"}/>
                </div>   
            </div>

    );
}
export default PokemonItemCard;