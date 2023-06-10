import React from "react";
import Sidebar from "../Sidebar/Sidebar";

export default function () {
    return (
        <div className="row content-section">
            <Sidebar />
            <div className="welcome-section col-lg-9">
                <h2>Bienvenue dans l'admin de yonebi. </h2>
                <p>Votre banque de liens de ressources numériques</p>              
            </div>
        </div>
    )
}