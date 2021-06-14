import React, {useState} from "react";
import "./editprofile.css";
import icon1 from "../images/ic_account_circle_24px.png"
import icon2 from "../images/ic_content_paste_24px.png"
import icon3 from "../images/ic_email_24px.png"
import icon4 from "../images/ic_call_24px.png"
import icon1White from "../images/ic_account_circle_24px_white.png"
import editPdp from "../images/Modifier PDP.png"
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

import MySpace from "./MySpace";


function EditProfile() {
    const [profilPictureReg, setProfilPictureReg] = useState("");
    const [nameReg, setNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [passwordNewReg, setPasswordNewReg] = useState("");
    const [passwordConfirmationReg, setPasswordConfirmationReg] = useState("");


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
                            <input type={"password"} id={"password"} required
                                   onChange={(e) => setPasswordReg(e.target.value)}/>
                            <label htmlFor={"password"}>Mot de Passe actuel (laissez vide pour le conserver)</label>
                        </div>

                        <div className={"form-input"}>
                            <input type={"password"} id={"passwordNew"} required
                                   onChange={(e) => setPasswordNewReg(e.target.value)}/>
                            <label htmlFor={"passwordNew"}>Nouveau mot de passe (laisser vide pour conserver l'actuel)</label>
                        </div>

                        <div className={"form-input"}>
                            <input type={"password"} id={"passwordConfirmation"} required
                                   onChange={(e) => setPasswordConfirmationReg(e.target.value)}/>
                            <label htmlFor={"passwordConfirmation"}>Confirmer le nouveau mot de passe</label>
                        </div>

                        <Button variant={"contained"} size={"large"}
                                style={{backgroundColor: "#36493C", color: "white", fontWeight: "bold"}} type={"submit"}
                                onClick={editPdp}>
                            ENVOYER
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;