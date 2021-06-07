import React from "react";
import "./home.css";
import image1 from "../images/195414245_146371470876454_4608462346851878142_n.jpg";
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <div className={"home-top"}>
                <span id="title">NE RESTEZ PLUS ISOLÉS</span>
                <span id="text">Commencez à utiliser notre service dès aujourd'hui et découvrez des nouvelles manières d'aider son prochain, ou de se faire aider, selon votre profil.</span>
                <div style={{
                    display: "flex",
                    justifyContent: "flex-start"
                }}>
                    <Link to={"/about"} id="link" className={"link-button"}>
                        <span id="presentation-button">PRESENTATION</span>
                    </Link>

                    <Link to={"/faq"} id="link">
                        <span>EN SAVOIR PLUS</span>
                    </Link>
                </div>
            </div>

            <div className={"home-steps"}>
                <span id="title">REJOIGNEZ-NOUS</span>
                <span id="text">en trois étapes :</span>

            </div>

            <div className={"home-fast"}>
                <img/>
                <div>
                    <span id="title">Une adhésion rapide</span>
                    <span id="text">Inscrivez-vous, connectez-vous et informez votre médecin de votre adhérence à notre service. Il s'occupera de nous fournir les informations relatives à votre traitement.</span>
                </div>
            </div>

            <div className={"home-interface"}>
                Une interface intuitive
            </div>

            <div className={"home-follow"}>
                Un suivi personnalisé
            </div>

            <div className={"home-circles"}>

            </div>
            {/*<img src={image1} style={{width: "100%"}}/>*/}
            <br/>
            {props.stuff}
            <br/>
            <a href="/authentication">Authentication Page</a>
        </div>
    );
}

export default Home;