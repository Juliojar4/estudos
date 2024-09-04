import './index.scss'

import React from "react";

const NavBar = () => {

    return (
        <div className='container-navbar'>
            <nav className='nav-content'>
                <a href="/">Home</a>
                <a href="/register">Register Product</a>
                <a href="/list">List of Product</a>
            </nav>
        </div>
    )

}

export default NavBar