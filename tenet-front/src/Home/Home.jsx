import React from "react";
import {Link} from "react-router-dom";
import {FaHeart, FaIdBadge, FaUserFriends} from "react-icons/fa";
import "./home.css";
import image1 from "../images/195414245_146371470876454_4608462346851878142_n.jpg";
import image2 from "../images/194350506_923775761803197_5131385384495490085_n.jpg";
import image3 from "../images/193723231_387143789331981_5364373482014531819_n.png";
import personalSpace from "../images/TEMPpersonalSpace.png";


function Home(props) {
    return (
        <div className={"home-page"}>
            <div className={"home-top"}>
                <img src={image1} id="image-background"/>
                <div className={"home-top-image-container"}>
                    <span id="title">NE RESTEZ PLUS ISOLÉS</span>

                    <span id="text">
                    Commencez à utiliser notre service dès aujourd'hui et découvrez des nouvelles manières d'aider son prochain, ou de se faire aider, selon votre profil.
                </span>

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
            </div>

            <div className={"home-steps"}>
                <span id="title">REJOIGNEZ-NOUS</span>

                <span id="text">en trois étapes :</span>
            </div>

            <div className={"home-split home-fast"}>
                <img src={image2} id="image-split"/>

                <div className={"vertical-flex"}>
                    <span id="title">Une adhésion rapide</span>

                    <span id="text">
                        Inscrivez-vous, connectez-vous et informez votre médecin de votre adhérence à notre service. Il s'occupera de nous fournir les informations relatives à votre traitement.
                    </span>
                </div>
            </div>

            <div className={"home-split home-interface"}>
                <div className={"vertical-flex"}>
                    <span id="title">Une interface intuitive</span>

                    <span id="text">
                        Une fois votre compte validé, vous aurez directement accès à l'interface principale de notre service. Profitez d'astuces intuitive lors de la 1ère utilisation afin de rapidement prendre un main votre nouveau compagnon.
                    </span>
                </div>

                <img src={personalSpace} id="image-split"/>
            </div>

            <div className={"home-split home-follow"}>
                <img src={image3} id="image-split"/>

                <div className={"vertical-flex"}>
                    <span id="title">Un suivi personnalisé</span>

                    <span id="text">
                        Profitez ensuite d'un suivi en temps réel par vos proches et votre médecin de votre état de santé ainsi que de notifications, rappels et mises à jour de l'avancement de votre traitement.
                    </span>
                </div>
            </div>

            <div className={"home-circles"}>
                <div className={"vertical-flex"}>
                    <span className={"home-circle-icon"}>
                        <FaHeart color={"#FFFFFF"}/>
                    </span>

                    <span id="text">
                        Gardez contact avec les personnes qui vous sont chères et qui veulent votre bien. Suivez votre traitement et bénéficiez d'un suivi en temps réel par votre famille et les membres de notre équipe.
                    </span>
                </div>

                <div className={"vertical-flex"}>
                    <span className={"home-circle-icon"}>
                        <FaIdBadge color={"#FFFFFF"}/>
                    </span>

                    <span id="text">
                        Votre médecin traitant pourra se parrainer à votre compte afin de le valider et remettre les ordonnances, informations relatives et recommandations vis-à-vis de votre traitement et de votre profil.
                    </span>
                </div>

                <div className={"vertical-flex"}>
                    <span className={"home-circle-icon"}>
                        <FaUserFriends color={"#FFFFFF"}/>
                    </span>

                    <span id="text">
                        Une équipe motivée composée de votre famille et des bénévoles constituant notre équipe feront tout ce qui est en leur pouvoir pour assurer votre sécurité psychologique tout au long de votre traitement.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;