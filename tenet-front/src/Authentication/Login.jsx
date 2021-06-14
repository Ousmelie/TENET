import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Axios from 'axios';
import {Button} from "@material-ui/core";
import "./authentication.css";

function Login() {
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

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

    function loginUser() {
        console.log("Logging in");
        Axios.post("http://localhost:9000/login", {
            email: emailLog,
            password: passwordLog,
        }).then((res) => {
            console.log(res);
        })
    }

    useEffect(() => {
        checkIfLoggedIn();
    });

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

                <Button variant={"contained"} size={"large"} style={{backgroundColor: "#36493C", color: "white", fontWeight: "bold"}} type={"submit"} onClick={loginUser}>
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