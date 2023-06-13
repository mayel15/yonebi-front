import {React, useState} from "react";
import EditCategory from "../EditCategory";


export default function Category(props) {

    const [isClicked, setIsClicked] = useState(false);
    const handleDelete = async () => {

        await fetch(`https://yonebi-back.vercel.app/api/categories/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message)
                window.location.href = '/admin/categories'
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
            <div>{props.subject + ' >'}</div>
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
            <EditCategory
                name={props.name}
                subject={props.subject}
                id={props.id}
            />
            : null
            }
        </div>
    )
}