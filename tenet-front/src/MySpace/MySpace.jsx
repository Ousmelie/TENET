import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import {Button} from "@material-ui/core";

function MySpace() {
    const [loggedInUser, setLoggedInUser] = useState("");

    let history = useHistory();
    Axios.defaults.withCredentials = true;
    function checkIfLoggedIn() {
        Axios.get("http://localhost:9000/isLoggedIn", {
        }).then((res) => {
            console.log(res);
            if (res.data.login){
                setLoggedInUser(res.data.user[0].email);
            }else {
                history.push("/login");
            }
        })
    }

    function logoutUser() {
        Axios.post("http://localhost:9000/logout", {
        }).then((res) => {
            console.log(res);
        }).then(() => {
            history.push("/login");
        })
    }

    useEffect(() => {
        checkIfLoggedIn();
    })

    return (
        <div>
            {loggedInUser}

            <Button variant={"contained"} size={"large"} style={{backgroundColor: "#36493C", color: "white", fontWeight: "bold"}} type={"submit"} onClick={logoutUser}>
                ME DECONNECTER
            </Button>
        </div>
    );
}

export default MySpace;
