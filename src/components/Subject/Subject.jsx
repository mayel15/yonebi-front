import { React, useState } from "react";
import './Subject.css'
import EditSubject from "../EditSubject";

export default function Subject(props) {

    const [isClicked, setIsClicked] = useState(false);


    const handleDelete = async () => {

        await fetch(`https://yonebi-back.vercel.app/api/subjects/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message)
                window.location.href = '/admin/subjects'
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
        <div className="sub-cat-card col-lg-5">
            <h3>{props.name}</h3>
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
            {(isClicked)
            ?
            <EditSubject
                name={props.name}
                id={props.id}
            />
            : null
            }
        </div>
    )
}