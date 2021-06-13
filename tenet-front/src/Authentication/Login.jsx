import React, {useEffect, useState} from "react";
import Axios from 'axios';
import {Button} from "@material-ui/core";
import "./authentication.css"
import {Link, useHistory} from "react-router-dom";

function Login() {
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    Axios.defaults.withCredentials = true;

    function loginUser() {
        console.log("Logging in");
        Axios.post("http://localhost:9000/login", {
            email: emailLog,
            password: passwordLog,
        }).then((res) => {
            console.log(res);
            redirectIfLoggedIn();
        })
    }

    let history = useHistory();
    function redirectIfLoggedIn() {
        Axios.get("http://localhost:9000/isLoggedIn")
            .then((res) => {
                console.log(res);
                if (res.data.loggedIn == true){
                    history.push("/myspace");
                }
            })
    }

    useEffect(() => {
        redirectIfLoggedIn();
    })

    return (
        <div className={"form-container"}>
            <form className={"authentication-form"}>
                <span className={"form-title"}>
                    Connexion à votre compte
                </span>

                <div className={"form-input"}>
                    <input type={"text"} id={"email"} required onChange={(e) => setEmailLog(e.target.value)}/>
                    <label htmlFor={"email"}>E-Mail</label>
                </div>

                <div className={"form-input"}>
                    <input type={"password"} id={"password"} required onChange={(e) => setPasswordLog(e.target.value)}/>
                    <label htmlFor={"password"}>Mot de Passe</label>
                </div>

                <Button variant={"contained"} size={"large"} style={{backgroundColor: "#36493C", color: "white", fontWeight: "bold"}} onClick={loginUser}>
                    ME CONNECTER
                </Button>

                <Link to={"/register"} style={{textDecoration: "none"}}>
                    <span className={"form-subtext"}>
                        Pas encore de compte ? Inscrivez-vous
                    </span>
                </Link>
            </form>
        </div>
    );
}

export default Login;