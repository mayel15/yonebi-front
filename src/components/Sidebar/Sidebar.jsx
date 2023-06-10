import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch('http://localhost:8000/api/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const subjectsResponse = await fetch('http://localhost:8000/api/subjects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const subjectsData = await subjectsResponse.json();
        setSubjects(subjectsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
        <nav className="sidebar">
            <ul className="sidebar-nav">
                {subjects.map((s, index)=>{
                    return (
                        <li key={index} id={index}>
                            <Link to={"/"+s.name}>{s.name}</Link>
                            <ul className="sub-nav">
                                {categories.map((c, index)=>{
                                    return (c.subject === s.name)
                                    ? <li key={index} id={index}><Link to={"/"+s.name+"/"+c.name}>{c.name}</Link></li>
                                    : null
                                    
                                })}

                            </ul>
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    );
}

