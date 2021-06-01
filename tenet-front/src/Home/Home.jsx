import React from "react";

function Home(props) {
    return (
        <div>
            <br/>
            {props.stuff}
            <br/>
            <a href="/authentication">Authentication Page</a>
        </div>
    );
}

export default Home;