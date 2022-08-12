import React from "react";
import {useContext, useState} from "react"
import { HeartIcon } from '@heroicons/react/solid'
import { SwitchHorizontalIcon } from '@heroicons/react/solid'
import FavoriteContext from "../store/favorite-context"

function FavoritePokemonCard(props){
    const favoriteCtx = useContext(FavoriteContext);
    // const [compareToggle, setCompareToggle] = useState(false)

    //add favorite pokemon id
    const itemIsFavorite = favoriteCtx.itemFavorite(props.id)

    //Toggle betwwen favorited and non-favorited
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
        <>
            <div className="basis-1/5 w-30 h-54 m-2 rounded-xl shadow-xl border">
                    <div 
                    style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain"
                    }} 
                    className="flex flex-row justify-between w-max-w-0 h-40 rounded-t-xl p-2 border" >
                        {/* <SwitchHorizontalIcon onClick={compareHandle}  className={"hover:cursor-pointer h-4 w-4 text-green-600"}/> */}
                        <HeartIcon onClick={toggleFavorites} className={itemIsFavorite?"hover:cursor-pointer h-8 w-8 text-blue":"hover:cursor-pointer h-4 w-4 text-red-900"}/>
                    </div>
                
                <div className="flex flex-row border rounded-b-xl pl-4 pr-4">
                        <h1 className="text-md text-current text-center" >{props.name}</h1> 
                </div>  
            </div>
        </>
            

    );
}
export default FavoritePokemonCard;