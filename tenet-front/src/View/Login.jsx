import React from "react";

function Login() {
    return (
        <div>
            This is the Login Page
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