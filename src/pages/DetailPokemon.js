import React from "react"
import { useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"


function DetailPokemon({index}){
    function info(){
        alert("Still working on it");
    }
    return(
        <>
          {
            (!index)?"":(
                <>
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex overflow-x-auto flex-row max-w-full p-2" >
                            <div 
                            style={{
                                backgroundImage: `url(${index.sprites.other.home.front_default})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain"
                                }} 
                            className="w-48 h-48 border flex-shrink-0"></div>
                            <div 
                            style={{
                                backgroundImage: `url(${index.sprites.other.home.front_shiny})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain"
                                }} 
                            className="w-48 h-48 border flex-shrink-0"></div>
                             <div 
                            style={{
                                backgroundImage: `url(${index.sprites.other.dream_world.front_default})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain"
                                }} 
                            className="w-48 h-48 border flex-shrink-0"></div>
                             <div 
                            style={{
                                backgroundImage: `url(${index.sprites.front_default})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain"
                                }} 
                            className="w-48 h-48 border flex-shrink-0"></div>
                            <div 
                            style={{
                                backgroundImage: `url(${index.sprites.front_shiny})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain"
                                }} 
                            className="w-48 h-48 border flex-shrink-0"></div>

                        </div>
                        <div className="w-full h-32 overflow-y-auto items-center flex flex-col border-b-2">
                            <h1 className="text-red-900 text-4xl font-bold">{index.name.toUpperCase()}</h1>
                            <div className="w-full flex flex-col p-2">
                                <div className="bg-red-700 w-full rounded-full flex flex-row items-center justify-between pl-4 pr-4 pt-2 pb-2 text-white mb-2">
                                    <h1>Height</h1>
                                    <h1>{index.height}</h1>
                                </div>
                                <div className="bg-red-700 w-full rounded-full flex flex-row items-center justify-between pl-4 pr-4 pt-2 pb-2 text-white mb-2">
                                    <h1>Weight</h1>
                                    <h1>{index.weight}</h1>
                                </div>
                                <div className="bg-red-700 w-full rounded-full flex flex-row items-center justify-between pl-4 pr-4 pt-2 pb-2 text-white mb-2">
                                    <h1>Order</h1>
                                    <h1>{index.order}</h1>
                                </div>
                                <div className="bg-red-700 w-full rounded-full flex flex-row items-center justify-between pl-4 pr-4 pt-2 pb-2 text-white mb-2">
                                    <h1>Base Experience</h1>
                                    <h1>{index.base_experience}</h1>
                                </div>
                                <div className="bg-red-700 w-full rounded-full flex flex-row items-center justify-between pl-4 pr-4 pt-2 pb-2 text-white mb-2">
                                    <h1>Species</h1>
                                    <h1>{index.species.name}</h1>
                                </div>
                                <button className="bg-green-600 text-white w-64 rounded-md px-2 py-1" onClick={info}>More Information</button>
                            </div>
                            <h1></h1>
                        </div>
                    </div>
                </>
            )
          }  
        </>
        
    );
}

export default DetailPokemon;