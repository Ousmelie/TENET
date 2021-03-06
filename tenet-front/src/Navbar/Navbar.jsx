import React, {useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

import "./navbar.css";
import {navbarDataLoggedOut, navbarDataLoggedIn} from "./navbarData";
import Axios from "axios";

function Navbar(props) {
    const [navbarData, setNavbarData] = useState([])
    const [click, setClick] = useState(false)
    const [loginStatus, setLoginStatus] = useState();

    let history = useHistory();
    Axios.defaults.withCredentials = true;
    function checkIfLoggedIn() {
        Axios.get("http://localhost:9000/isLoggedIn", {
        }).then((res) => {
            console.log(res);
            setLoginStatus(res.data.login);
        })
    }

    useEffect(() => {
        checkIfLoggedIn();
        if (loginStatus){
            setNavbarData(navbarDataLoggedIn);
        }else{
            setNavbarData(navbarDataLoggedOut);
        }
    });

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <nav className={"navbar"}>
            <div className={"navbar-container"}>
                <div className="navbar-logo">
                    <span id="safer">SAFER</span>
                    <span id="tenet">by TENET</span>
                </div>
            </div>

            <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                {navbarData.map((item, index) => {
                    return (
                        <li className={"navbar-item"}>
                            <NavLink to={item.path} className={"navbar-links"} activeClassName={"active"} id={index} onClick={handleClick}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>

            <div className={"navbar-icon"} onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
        </nav>

        // <div className="navbar-container">
        //     <div className="navbar-item" id="logo">
        //         <span id="safer">SAFER</span>
        //         <span id="tenet">by TENET</span>
        //     </div>
        //
        //     <div className="navbar-links">
        //         {navbarData.map((item, index) => {
        //             return(
        //                 <Link to={item.path} className="navbar-item" id={index}>
        //                     <span>{item.title}</span>
        //                 </Link>
        //             )
        //         })}
        //     </div>
        //     <span className="navbar-division"/>
        //     <FaSearch className="navbar-item" id="search"/>
        // </div>
    );
}

export default Navbar;