import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Home, Login, Register, MySpace } from './Scripts/components.js';
import './App.css';
import Navbar from "./Navbar/Navbar";
import Axios from "axios";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    <Route path="/home" render={() => (
                        <Home/>
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
