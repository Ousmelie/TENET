import React from "react";
import "./MySpace.css";
import icon1 from "../images/ic_account_circle_24px.png"
import icon2 from "../images/ic_content_paste_24px.png"
import icon3 from "../images/ic_email_24px.png"
import icon4 from "../images/ic_call_24px.png"
import rectangleBlanc from "../images/Rectangle 21.png"



function MySpace() {
    return (
        <div className={"mySpace"}>

            <div className={"myspace_title"}>
                <span id="myspace_title">Bienvenue dans votre espace personnel, </span>
            </div>

            <div className={"myspace_hub"}>

                <div className={"editProfile"}>
                    <img src={icon1} id="icon_function1" />
                    <span id="title_editProfil">Modifier mon profil</span>
                    <img src={rectangleBlanc} id="fond_bouton"/>
                </div>

                <div className={"followTreatment"}>
                    <img src={icon2} id="icon_function2" />
                    <span id="title_followTreatment">Suivre mon traitement</span>
                    <img src={rectangleBlanc} id="fond_bouton"/>
                </div>


                <div className={"checkMail"}>
                    <img src={icon3} id="icon_function3" />
                    <span id="title_checkMail">Consulter ma messagerie</span>
                    <img src={rectangleBlanc} id="fond_bouton"/>
                </div>


                <div className={"editProfile"}>
                    <img src={icon4} id="icon_function4" />
                    <span id="title_contactList">Liste de contacts</span>
                    <img src={rectangleBlanc} id="fond_bouton"/>
                </div>

            </div>


        </div>
    )
}

export default MySpace;