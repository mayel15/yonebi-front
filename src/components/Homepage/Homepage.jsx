import React from "react";
import Search from "../Search";
import Resource from "../Resource/Resource";
import { useState, useEffect } from "react";
import HeaderNav from "../Header/HeaderNav";
import Sidebar from "../Sidebar/Sidebar";

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
    <div className="row content-section">
      <Sidebar view='admin'/>
      <div className="welcome-section col-lg-9">
        <h2>Bienvenue dans yonebi. </h2>
        <p>Votre banque de liens de ressources numériques</p>
      </div>
    </div>
  );
}
