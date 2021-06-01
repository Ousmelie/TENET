import React, {useState} from "react";
import { Login, Register } from "../Scripts/components";

function Authentication() {
    const [loginRegister, setLoginRegister] = useState(true);

    return (
        <div>
            <Login/>
            <br/>

            <Register/>
            <br/>

            <a href="/">Home Page</a>
        </div>
    );
}

export default Authentication;