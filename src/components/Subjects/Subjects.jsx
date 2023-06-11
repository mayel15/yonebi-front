import { React, useState, useEffect } from "react";
import Subject from "../Subject/Subject";
import './Subjects.css'
import GestionButtons from "../GestionButtons/GestionButtons";

export default function Subjects() {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const getSubjects = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/subjects/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();

                console.log(data);
                setSubjects(data);
            } catch (error) {
                console.error(error);
            }
        };

        getSubjects();
    }, []);

    return (
        <div className="content-section ">
            <GestionButtons />
            <h3 className="text-center col-lg-12 content-center">Gérer les sujets</h3>
            <div className="content-center row">

                {
                    subjects.map((s, index) => (
                        <Subject
                            key={s.id}
                            name={s.name}
                            id={s._id}
                        />)
                    )
                }
            </div>
        </div>

    )
}