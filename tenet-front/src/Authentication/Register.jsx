import React, {useState} from "react";
import Axios from 'axios';
import {Button} from "@material-ui/core";
import "./authentication.css"
import {Link} from "react-router-dom";

function Register() {
    const [nameReg, setNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [passwordConfirmationReg, setPasswordConfirmationReg] = useState("");
    const [birthDateReg, setBirthDateReg] = useState("");
    const [pedCaseReg, setPedCaseReg] = useState("");

    function registerUser() {
        console.log("Registering")
        Axios.post("http://localhost:9000/register", {
            email: emailReg,
            password: passwordReg,
        }).then((res) => {
            console.log(res);
        })
    }

    return (
        <div className={"form-container"}>
            <form className={"editProfil-form"}>
                <span className={"form-title"}>
                    Inscription à notre service
                </span>

                <div className={"form-input"}>
                    <input type={"text"} id={"name"} required onChange={(e) => setNameReg(e.target.value)}/>
                    <label htmlFor={"name"}>Nom et Prénom</label>
                </div>

                <div className={"form-input"}>
                    <input type={"text"} id={"email"} required onChange={(e) => setEmailReg(e.target.value)}/>
                    <label htmlFor={"email"}>E-Mail</label>
                </div>

                <div className={"form-input"}>
                    <input type={"password"} id={"password"} required onChange={(e) => setPasswordReg(e.target.value)}/>
                    <label htmlFor={"password"}>Mot de Passe</label>
                </div>

                <div className={"form-input"}>
                    <input type={"password"} id={"passwordConfirmation"} required onChange={(e) => setPasswordConfirmationReg(e.target.value)}/>
                    <label htmlFor={"passwordConfirmation"}>Confirmation du Mot de Passe</label>
                </div>

                <div className={"form-date"}>
                    <input type={"date"} id={"birthDate"} required onChange={(e) => setBirthDateReg(e.target.value)}/>
                    <label htmlFor={"birthDate"}>Date de Naissance</label>
                </div>

                <div className={"form-input"}>
                    <input type={"text"} id={"pedCase"} required onChange={(e) => setPedCaseReg(e.target.value)}/>
                    <label htmlFor={"pedCase"}>Cas PED (Renseigné Par Le Responsable Soignant)</label>
                </div>

                <Button variant={"contained"} size={"large"} style={{backgroundColor: "#36493C", color: "white", fontWeight: "bold"}} type={"submit"} onClick={registerUser}>
                    M'INSCRIRE
                </Button>

                <Link to={"/login"} style={{textDecoration: "none"}}>
                    <span className={"form-subtext"}>
                        Vous avez déjà un compte ? Connectez-vous
                    </span>
                </Link>
            </form>
        </div>
);
}

export default Register;