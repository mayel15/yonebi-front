import React, { useState } from "react";

export default function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setInputSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/resources/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      const filteredResult = data.filter(
        (resource) =>
          resource.title === inputSearch /*||
          resource.subject.name === inputSearch ||
          resource.category.name === inputSearch*/
      );

      setResult(filteredResult);
      console.log(filteredResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="search"
        value={inputSearch}
        placeholder="Rechercher"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Chercher</button>

      {result.map((resource) => (
        <h3>{resource.title}</h3>
      ))}
    </div>
  );
}
