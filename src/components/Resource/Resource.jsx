import { React, useEffect, useState } from "react";
import './Resource.css'

export default function Resource(props) {

    const [resources, setResources] = useState([]);


    const handleDelete = async () => {

        await fetch(`https://yonebi-back.vercel.app/api/resources/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = '/yonebi-front/admin/home'
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleEdit = async () => {
        window.location.href = '/yonebi-front/admin/editResource'

    }



    return (
        <div className="resource-card col-lg-12">
            <h3> <a href={props.url} target="blank">{props.title}</a></h3>
            <div>{props.description}</div>
            <div>Auteurs / Sources : {props.authors}</div>
            <div>{props.subject + " > " + props.category}</div>
            <p>{props.addedAt}</p>
            {
                (props.view === 'admin')
                    ? (
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
                    )
                    : null
        }




        </div>
    )
}