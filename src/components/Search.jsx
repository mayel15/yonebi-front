import React, { useState } from "react";

export default function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setInputSearch(event.target.value);
  };

  const search = (query, data) => {
    const filteredData = data.filter((item) => {
      // Remplacez "property" par le nom de la propriété sur laquelle vous souhaitez effectuer la recherche
      const propertyValue = item.property.toLowerCase(); // Convertir en minuscules pour une recherche insensible à la casse
      const queryValue = query.toLowerCase();
      
      return propertyValue.includes(queryValue);
    });
  
    return filteredData;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("https://yonebi-back.vercel.app/api/resources/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      const data = await response.json();
      console.log(data);
      const filteredData = search(inputSearch, data);
      setResult(filteredData);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <form className="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={handleChange}/>
      <button class="btn btn-outline-dark" type="submit" onClick={handleSubmit}>Search</button>
    </form>
  );
}
