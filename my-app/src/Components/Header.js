import React from "react";

import './style.css'

const Header = props =>{
    return(
        <header>
            <div className="logo">
                {props.children}

            </div>
        </header>
    )
}

export default Header;
