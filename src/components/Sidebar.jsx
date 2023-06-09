import React from 'react';
import { Link } from 'react-router-dom';




export default function Sidebar() {
    let categories = [], subjects = [];
    const fetchData = async () => {

        await fetch(`http://localhost:8000/api/categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                categories = data;
            })
            .catch((error) => {
                console.error(error);
            });

        await fetch(`http://localhost:8000/api/subjects`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                subjects = data

            })
            .catch((error) => {
                console.error(error);
            });

        console.log('here')
        console.log(subjects[0].name)
        console.log(categories[0].name)
    };

    fetchData();
    

    return (
        <nav className="sidebar">
            <ul className="sidebar-nav">
                {subjects.map((s, index)=>{
                    return (
                        <li key={index} id={index}>
                            <Link to={"/"+s.name}>{s.name}</Link>
                            <ul className="sub-nav">
                                {categories.map((c, index)=>{
                                    return <li key={index} id={index}><Link to={"/"+s.name+"/"+c.name}>{c.name}</Link></li>
                                    
                                })}

                            </ul>
                        </li>
                    )
                })
                }
                {/* Ajoutez d'autres sujets et catégories selon vos besoins */}
            </ul>
        </nav>
    );
}

