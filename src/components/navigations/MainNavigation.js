import React from "react";
import {Link} from 'react-router-dom'

function MainNavigations(){
    return(
        <header className="p-8 bg-red-900">
            <nav className="flex justify-between items-center ">
                    <div className="flex items-center">
                        <Link className="text-4xl font-bold text-white" to="/">Pokemon</Link>
                    </div>
                    <div>
                        <Link className="text-lg text-white" to="/favorites">Favorite Pokemon</Link>
                    </div>
            </nav>
        </header>
    );
}

export default MainNavigations;