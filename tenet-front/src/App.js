import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Home, Login, Register, MySpace } from './Scripts/components.js';
import './App.css';
import Navbar from "./Navbar/Navbar";

function App() {
    const [apiResponse, setApiResponse] = useState("");

    useEffect(() => {
            fetch("http://localhost:9000/testAPI")
                .then(res => res.text())
                .then(res => setApiResponse(res))
        }
    );

    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/myspace"/>
                    )}/>
                    <Route path="/myspace" render={() => (
                        <MySpace/>
                    )}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/myspace" component={MySpace}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
