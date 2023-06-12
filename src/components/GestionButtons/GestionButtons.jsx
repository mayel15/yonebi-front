import React from "react";
import { Link } from "react-router-dom";

export default function GestionButtons() {
    return (
        <div className="text-center button-gestion">
            <button>
                <Link to='/yonebi-front/admin/home/' >Gérer les ressources</Link>
            </button>
            <button
            >
                <Link to='/yonebi-front//admin/add' >Ajouter une ressource</Link>
            </button>
            <button
            >
                <Link to='/yonebi-front/admin/subjects/' >Gérer les sujets</Link>
            </button>
            <button>
                <Link to='/yonebi-front/admin/categories/' >Gérer les catégories</Link>
            </button>
        </div>
    )
}