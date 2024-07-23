// import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className={"navbar"}>
                <div className={"navbar-container"}>
                    <Link to={"/"} className={"navbar-logo"}>
                        RW <i className={"fa-solid fa-paint-roller"}/>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavBar;