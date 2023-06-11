import {React, useState} from "react";
import './Subject.css'

export default function Subject(props) {

    const [subjects, setSubjects] = useState([]);


    const handleDelete = async () => {

        await fetch(`http://localhost:8000/api/subjects/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = '/admin/subjects'
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleEdit = async () => {
        window.location.href = '/admin/editSubject'

    }

    return (
        <div className="sub-cat-card col-lg-5">
            <h3>{props.name}</h3>
            <div className="icons">
                <button
                    className="icon-card"
                    onClick={handleEdit}
                >
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button
                    className="icon-card"
                    onClick={handleDelete}
                >
                    <i class="fa-sharp fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}