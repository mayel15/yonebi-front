import { useParams } from 'react-router-dom';
import Resource from './Resource/Resource';
import { React, useState, useEffect } from 'react';

export default function CategoryPage() {
  const { subject, category } = useParams();
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
      <h1>{subject}</h1>
      <h2>{category}</h2>
      {
        
        resources.filter((r)=>(r.subject===subject&&r.category===category))
        .map((r, index) => (
          <Resource
            title={r.title}
            key={r.id}
            url={r.url}
            authors={r.authors}
            addedAt={r.addedAt.toString()}
            description={r.description}
            subject={r.subject}
            category={r.category}
          />

        ))}
      {/* Autres éléments personnalisés */}

    </div>
  )
}
  