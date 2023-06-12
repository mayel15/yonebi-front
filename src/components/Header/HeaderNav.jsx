import React from "react";
import './HeaderNav.css';
import { Link } from "react-router-dom";
import Search from "../Search";

export default function HeaderNav() {
    return (
        <nav class="navbar bg-body-tertiary header-nav content-section">
            <div class="container-fluid">
                <a href="/yonebi-front" class="navbar-brand">yonebi.</a>
                <Search />
                <div className="icons-header">
                    <div>
                        <Link to="/yonebi-front/infos"><i class="fa-solid fa-circle-info"></i></Link>
                    </div>
                    <div>
                        <Link to="/yonebi-front/admin/login"><i class="fa-solid fa-right-to-bracket"></i></Link>
                    </div>
                </div>

            </div>
        </nav>

    )
}