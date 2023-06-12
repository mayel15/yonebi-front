import React from "react";
import './HeaderNav.css';
import { Link } from "react-router-dom";
import Search from "../Search";

export default function HeaderNav() {
    return (
        <nav class="navbar bg-body-tertiary header-nav content-section">
            <div class="container-fluid">
                <a href="/" class="navbar-brand">yonebi.</a>
                <Search />
                <div className="icons-header">
                    <div>
                        <Link to="/infos"><i class="fa-solid fa-circle-info"></i></Link>
                    </div>
                    <div>
                        <Link to="/admin/login"><i class="fa-solid fa-right-to-bracket"></i></Link>
                    </div>
                </div>

            </div>
        </nav>

    )
}