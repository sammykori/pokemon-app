import React from "react";
import {Link} from 'react-router-dom';
import {useContext} from "react";
import FavoriteContext from "../../store/favorite-context";

function MainNavigations(){
    const favoriteCtx = useContext(FavoriteContext)
    return(
        <header className="px-32 py-2 bg-red-900 fixed top-0 left-0 right-0">
            <nav className="flex justify-between items-center ">
                    <div className="flex items-center">
                        <Link className="text-4xl font-bold text-white" to="/">Pokemon</Link>
                    </div>
                    <div>
                        <Link className="text-lg text-white" to="/favorites">Favorite Pokemon<span className="w-6 h-6 bg-white text-red-900 m-2 rounded-sm p-1">{favoriteCtx.totalFavorites}</span></Link>
                    </div>
            </nav>
        </header>
    );
}

export default MainNavigations;