import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import GestionButtons from "../GestionButtons/GestionButtons";

export default function AdminHome() {
    return (
        <div className="row content-section">
            <Sidebar view='admin' />
            <div className="welcome-section col-lg-9">
                <div>
                    <h2>Bienvenue dans l'admin de yonebi. </h2>
                    <p>Votre banque de liens de ressources numériques</p>
                </div>
                <GestionButtons />
            </div>

        </div>
    )
}