import React, {useEffect, useState} from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import {Button} from "@material-ui/core";
import "./myspace.css";

import icon1 from "../images/ic_account_circle_24px.png"
import icon2 from "../images/ic_content_paste_24px.png"
import icon3 from "../images/ic_email_24px.png"
import icon4 from "../images/ic_call_24px.png"
import rectangleBlanc from "../images/Rectangle_21.png"
import icon1White from "../images/ic_account_circle_24px_white.png";

function MySpace(props) {
    const [loggedInUser, setLoggedInUser] = useState("");

    let history = useHistory();
    Axios.defaults.withCredentials = true;
    function checkIfLoggedIn() {
        Axios.get("http://localhost:9000/isLoggedIn", {
        }).then((res) => {
            console.log(res);
            if (res.data.login){
                setLoggedInUser(res.data.user[0].full_name);
            }else {
                history.push("/login");
            }
        })
    }

    function logoutUser() {
        Axios.post("http://localhost:9000/logout", {
        }).then((res) => {
            console.log(res);
        }).then(() => {
            history.push("/login");
        })
    }

    useEffect(() => {
        checkIfLoggedIn();
    })

    return (
        <div className={"mySpace"}>
            <div className={"myspace_title"}>
                <span id="myspace_title">Bienvenue dans votre espace personnel, {loggedInUser}</span>
            </div>

            <Button variant={"contained"} size={"large"} style={{backgroundColor: "#36493C", color: "white", fontWeight: "bold"}} type={"submit"} onClick={logoutUser}>
                ME DECONNECTER
            </Button>

            <div className={"myspace_hub"}>
                {props.editProfil ? (
                    <div id={"editProfil"}>
                        <div id={"boutonEditProfil"}>
                            <Link to={"/myspace"} id="link">
                                <Button variant={"contained"} size={"large"}
                                        style={{backgroundColor: "#36493C", color: "white", fontWeight: "bold",}}>
                                    <img src={icon1White} id="icon_function1"/>
                                    <span id="title_editProfil">Modifier mon profil</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div id={"editProfil"}>
                        <div id={"boutonEditProfil"}>
                            <Link to={"/editProfile"} id="link">
                                <Button variant={"contained"} size={"large"} style={{backgroundColor:"white", color: "#555555", fontWeight: "bold", }}>
                                    <img src={icon1} id="icon_function1"/>
                                    <span id="title_editProfil">Modifier mon profil</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}

                <div id={"followTreatment"}>
                    <div id={"boutonFollowTreatment"}>
                        <Link to={"/followTreatment"} id="link">
                            <Button variant={"contained"} size={"large"} style={{backgroundColor:"white", color: "#555555", fontWeight: "bold", }}>
                                <img src={icon2} id="icon_function2"/>
                                <span id="title_followTreatment">Suivre mon traitement</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div id={"checkMail"}>
                    <div id={"boutonCheckMail"}>
                        <Link to={"/checkMail"} id="link">
                            <Button variant={"contained"} size={"large"} style={{backgroundColor:"white", color: "#555555", fontWeight: "bold", }}>
                                <img src={icon3} id="icon_function3"/>
                                <span id="title_checkMail">Consulter ma messagerie</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div id={"contactList"}>
                    <div id={"boutonContactList"}>
                        <Link to={"/contactList"} id="link">
                            <Button variant={"contained"} size={"large"} style={{backgroundColor:"white", color: "#555555", fontWeight: "bold", }}>
                                <img src={icon4} id="icon_function4"/>
                                <span id="title_contactList">Suivre mon traitement</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MySpace;
