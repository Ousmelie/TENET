import React, {useEffect, useState} from "react";
import Axios from 'axios';
import {Button} from "@material-ui/core";
import "./authentication.css"
import {Link, useHistory} from "react-router-dom";

function Register() {
    const [nameReg, setNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [passwordConfirmationReg, setPasswordConfirmationReg] = useState("");
    const [birthDateReg, setBirthDateReg] = useState("");
    const [userTypeReg, setUserTypeReg] = useState("Patient");

    let history = useHistory();
    Axios.defaults.withCredentials = true;
    function checkIfLoggedIn() {
        Axios.get("http://localhost:9000/isLoggedIn", {
        }).then((res) => {
            console.log(res);
            if (res.data.login) {
                history.push("/myspace");
            }
        })
    }

    useEffect(() => {
        checkIfLoggedIn();
    })

    function registerUser() {
        if (passwordReg == passwordConfirmationReg) {
            console.log("Passwords match, Registering")
            Axios.post("http://localhost:9000/register", {
                email: emailReg,
                password: passwordReg,
                fullName: nameReg,
                birthDate: birthDateReg,
                userType: userTypeReg
            }).then((res) => {
                console.log(res);
            })
        } else {
            console.log("Passwords dont match")
        }

    }

    return (
        <div className={"form-container"}>
            <form className={"authentication-form"}>
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

                <select className={"form-input"} onChange={(e) => setUserTypeReg(e.target.value)}>
                    <option value="Patient" selected={"selected"}>Patient</option>
                    <option value="Volontaire">Volontaire</option>
                    <option value="Medecin">Médecin</option>
                </select>

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