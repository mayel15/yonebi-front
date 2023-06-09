import React from 'react';
import {Link } from 'react-router-dom';


export default function Sidebar() {
    return (
      <nav className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <Link to="/sujet1">Sujet 1</Link>
            <ul className="sub-nav">
              <li><Link to="/sujet1/categorie1">Catégorie 1</Link></li>
              <li><Link to="/sujet1/categorie2">Catégorie 2</Link></li>
              <li><Link to="/sujet1/categorie3">Catégorie 3</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/sujet2">Sujet 2</Link>
            <ul className="sub-nav">
              <li><Link to="/sujet2/categorie1">Catégorie 1</Link></li>
              <li><Link to="/sujet2/categorie2">Catégorie 2</Link></li>
              <li><Link to="/sujet2/categorie3">Catégorie 3</Link></li>
            </ul>
          </li>
          {/* Ajoutez d'autres sujets et catégories selon vos besoins */}
        </ul>
      </nav>
    );
}
  