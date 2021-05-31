import React from "react";

function Home(props) {
    return (
        <div>
            This is the Home Page
            <br/>
            {props.stuff}
            <br/>
            <a href="/authentication">Authentication Page</a>
        </div>
    );
}

export default Home;