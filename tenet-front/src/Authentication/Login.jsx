import React, {useState} from "react";

function Login() {
    const [usernameReg, setUsernameReg] = useState("");

    return (
        <div>
            Login User
            <br/>

            <form>
                <label>
                    <p>Email</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Mot de passe</p>
                    <input type="password"/>
                </label>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Login;