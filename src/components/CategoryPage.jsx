import React from 'react';


export default function CategoryPage({ match }) {
    const { sujet, categorie } = match.params;
  
    return (
      <div>
        <h1>{sujet}</h1>
        <h2>{categorie}</h2>
        {/* Ajoutez le contenu spécifique à la catégorie */}
      </div>
    );
}
  
  