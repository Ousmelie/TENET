import React from "react";

function Register() {
    return (
        <div>
            This is the Registration Page
            <br/>

            <form>
                <label>
                    <p>Prenom</p>
                    <input type="text"/>
                </label>

                <label>
                    <p>Nom</p>
                    <input type="text"/>
                </label>

                <label>
                    <p>Date de Naissance</p>
                    <input type="date"/>
                </label>

                <label>
                    <p>Email</p>
                    <input type="text"/>
                </label>

                <label>
                    <p>Mot de Passe</p>
                    <input type="password"/>
                </label>

                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default Register;