import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FaSearch, IconName} from "react-icons/fa";

import "./navbar.css";
import { navbarDataLoggedOut, navbarDataLoggedIn } from "./navbarData";

function Navbar() {
    const [navbarData, setNavbarData] = useState([])

    useEffect(() => {
        //Mettre la verification si logged in
        setNavbarData(navbarDataLoggedOut);
    });

    return (
        <div className="navbar-container">
            <div className="navbar-item" id="safer" style={{marginLeft: "20px", flex: 1}}>
                SAFER
            </div>
            <div className="navbar-item" id="byTenet" style={{flex: 1}}>
                by TENET
            </div>
            <div className="navbar-links" style={{flex: 4}}>
                {navbarData.map((item, index) => {
                    return(
                        <Link to={item.path} className="navbar-item" id={index}>
                            <span>{item.title}</span>
                        </Link>
                    )
                })}
            </div>
            <span className="navbar-division"/>
            <FaSearch className="navbar-item" style={{marginRight: "20px", flex: 1}}/>
        </div>
    );
}

export default Navbar;