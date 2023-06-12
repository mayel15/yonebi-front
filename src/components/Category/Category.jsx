import {React, useState} from "react";

export default function Category(props) {
    const handleDelete = async () => {

        await fetch(`https://yonebi-back.vercel.app/api/categories/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = '/admin/categories'
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleEdit = async () => {
        window.location.href = '/admin/editCategory'

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