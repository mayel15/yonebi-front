import React from "react";
import './HeaderNav.css';
import { Link } from "react-router-dom";

export default function HeaderNav() {
    return (
        <nav class="navbar bg-body-tertiary header-nav">
            <div class="container-fluid">
                <a href="/" class="navbar-brand">yonebi.</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-dark" type="submit">Search</button>
                </form>
                <div className="icons-header">
                    <div>
                        <Link to="/"><i class="fa-solid fa-circle-info"></i></Link>
                    </div>
                    <div>
                        <Link to="/admin/login"><i class="fa-solid fa-right-to-bracket"></i></Link>
                    </div>
                </div>

            </div>
        </nav>

    )
}