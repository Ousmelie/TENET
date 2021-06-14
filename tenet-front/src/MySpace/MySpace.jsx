import React from "react";
import "./MySpace.css";
import icon1 from "../images/ic_account_circle_24px.png"
import icon2 from "../images/ic_content_paste_24px.png"
import icon3 from "../images/ic_email_24px.png"
import icon4 from "../images/ic_call_24px.png"
import rectangleBlanc from "../images/Rectangle 21.png"
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";


function MySpace() {
    return (
        <div className={"mySpace"}>

            <div className={"myspace_title"}>

                <span id="myspace_title">Bienvenue dans votre espace personnel, </span>

            </div>

            <div className={"myspace_hub"}>


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
};

export default MySpace;