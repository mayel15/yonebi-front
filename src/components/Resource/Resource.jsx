import { React, useEffect, useState } from "react";
import './Resource.css'
import EditResource from "../EditResource/EditResource";

export default function Resource(props) {

    const [isClicked, setIsClicked] = useState(false);


    const handleDelete = async () => {

        await fetch(`https://yonebi-back.vercel.app/api/resources/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = '/admin/home'
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleEdit = async () => {
        (isClicked) ? setIsClicked(false) : setIsClicked(true)
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
                    ? (<div>
                        <div className="icons">
                            <button
                                className="icon-card"
                                onClick={handleEdit}
                            >
                                {
                                    (isClicked)
                                        ? <div>Annuler la modification</div>
                                        : <i class="fa-solid fa-pen"></i>
                                }

                            </button>
                            <button
                                className="icon-card"
                                onClick={handleDelete}
                            >
                                <i class="fa-sharp fa-solid fa-trash"></i>
                            </button>

                        </div>
                        {
                            (isClicked)
                                ?
                                <EditResource
                                    title={props.title}
                                    url={props.url}
                                    description={props.description}
                                    authors={props.authors}
                                    subject={props.subject}
                                    category={props.category}
                                    id={props.id}
                                />
                                : null
                        }
                    </div>
                    )
                    : null
            }




        </div>
    )
}