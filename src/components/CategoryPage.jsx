import React from 'react';


export default function CategoryPage({ match }) {
    const { subject, category } = match.params;
  
    return (
      <div>
        <h1>{subject}</h1>
        <h2>{category}</h2>
        {/* Ajoutez le contenu spécifique à la catégorie */}
      </div>
    );
}
  
  