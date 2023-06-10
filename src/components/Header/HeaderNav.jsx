import React from "react";
import './HeaderNav.css';

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
                        <a href="/"><i class="fa-solid fa-circle-info"></i></a>
                    </div>
                    <div>
                        <a href="/admin/login"><i class="fa-solid fa-right-to-bracket"></i></a>
                    </div>
                </div>

            </div>
        </nav>

    )
}