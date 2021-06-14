import React, {useState} from "react";
import "./editprofile.css";
import icon1 from "../images/ic_account_circle_24px.png"
import icon2 from "../images/ic_content_paste_24px.png"
import icon3 from "../images/ic_email_24px.png"
import icon4 from "../images/ic_call_24px.png"
import icon1White from "../images/ic_account_circle_24px_white.png"
import editPdp from "../images/Modifier PDP.png"
import {Button} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";

import MySpace from "./MySpace";
import Axios from "axios";


function EditProfile() {
    const [nameReg, setNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordNewReg, setPasswordNewReg] = useState("");
    const [passwordConfirmationReg, setPasswordConfirmationReg] = useState("");

    let history = useHistory();
    Axios.defaults.withCredentials = true;
    function editprofile(){
            if (passwordNewReg == passwordConfirmationReg){
                Axios.post("http://localhost:9000/editprofile", {
                    email: emailReg,
                    fullName: nameReg,
                    password: passwordNewReg,
                }).then((res) => {
                    console.log(res);
                })
            }else{
                console.log("Passwords dont match");
                alert("Passwords dont match");
            }
    };

    return (
        <div className={"editProfile"}>
            <MySpace editProfil={true}/>

            <div className={"editprofil_hub"}>
                <div className={"editPDP"}>
                    <img src={editPdp} id="icon_editPDP"/>
                </div>

                <div className={"form-container"}>
                    <form className={"editProfil-form"}>

                        <div className={"form-input"}>
                            <input type={"text"} id={"name"} required onChange={(e) => setNameReg(e.target.value)}/>
                            <label htmlFor={"name"}>Nom et Prénom</label>
                        </div>

                        <div className={"form-input"}>
                            <input type={"text"} id={"email"} required onChange={(e) => setEmailReg(e.target.value)}/>
                            <label htmlFor={"email"}>E-Mail</label>
                        </div>

                        <div className={"form-input"}>
                            <input type={"password"} id={"passwordNew"} required
                                   onChange={(e) => setPasswordNewReg(e.target.value)}/>
                            <label htmlFor={"passwordNew"}>Nouveau mot de passe</label>
                        </div>

                        <div className={"form-input"}>
                            <input type={"password"} id={"passwordConfirmation"} required
                                   onChange={(e) => setPasswordConfirmationReg(e.target.value)}/>
                            <label htmlFor={"passwordConfirmation"}>Confirmer le nouveau mot de passe</label>
                        </div>

                        <Button variant={"contained"} size={"large"} style={{backgroundColor: "#36493C", color: "white", fontWeight: "bold"}} type={"submit"} onClick={editprofile}>
                            Modifier mon Profil
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;