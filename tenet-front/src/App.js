import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Home, Authentication, WebRtc} from './Scripts/components.js';

import './App.css';

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
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    <Route path="/home" render={() => (
                        <Home stuff={apiResponse} />
                    )}/>
                    <Route path="/authentication" component={Authentication}/>
                    <Route path="/webrtc" component={WebRtc}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
