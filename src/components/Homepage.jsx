import React from "react";
import Search from "./Search";
import Resource from "./Resource/Resource";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/resources/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        setResources(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/*<h1>Homepage</h1>*/}
      {/*<Search />*/}
      <div className="resourcs-section row">
        {/*resources.map((r, index) => (
          <Resource
            title={r.title}
            key={r.id}
            url={r.url}
            authors={r.authors[1]}
            addedAt={r.addedAt}
            updatedAt={r.addedAt}
            description={r.description}
          />
        ))*/}
      </div>
    </div>
  );
}
