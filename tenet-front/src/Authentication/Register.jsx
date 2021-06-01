import React, {useState} from "react";
import Axios from 'axios';

function Register() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    function registerUser() {
        // console.log("test");
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username: usernameReg, password: passwordReg })
        // };
        // fetch("http://localhost:9000/testAPI/register", requestOptions)
        //     .then(res => console.log(res))

        Axios.post("http://localhost:9000/register",{
            username: usernameReg,
            password: passwordReg,
        }).then((res) => {
            console.log(res);
        })
    }

    return (
        <div>
            Register User
            <br/>

            <form>
                {/*<label>*/}
                {/*    <p>Prenom</p>*/}
                {/*    <input type="text"/>*/}
                {/*</label>*/}

                {/*<label>*/}
                {/*    <p>Nom</p>*/}
                {/*    <input type="text"/>*/}
                {/*</label>*/}

                {/*<label>*/}
                {/*    <p>Date de Naissance</p>*/}
                {/*    <input type="date"/>*/}
                {/*</label>*/}

                <label>
                    <p>Email</p>
                    <input type="text" onChange={(e) => setUsernameReg(e.target.value)} />
                </label>

                <label>
                    <p>Mot de Passe</p>
                    <input type="password" onChange={(e) => setPasswordReg(e.target.value)}/>
                </label>

                <button type="submit" onClick={registerUser}>S'inscrire</button>
            </form>
        </div>
    );
}

export default Register;