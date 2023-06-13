import { React, useState, useEffect } from "react";

export default function EditCategory(props) {
    const [formData, setFormData] = useState({
        name: props.name,
        subject: props.subject
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(formData.name === "" ){
            alert('Au moins un champ du formulaire est vide. :(')
        }else{
        await fetch(`https://yonebi-back.vercel.app/api/categories/${props.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.message){
                    alert(data.message)
                    window.location.href = '/admin/categories'
                }
                
            })
            .catch((error) => {
                console.error(error);
            });
        }
    };

    return (
        <div className="text-center">

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Catégories</label>
                    <input type='text' name="name" value={formData.name} placeholder="Catégorie" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="subject">Sujet</label>
                    <input type='text' name="subject" value={formData.subject} placeholder="Sujet" onChange={handleChange} />
                </div>

                <button
                    type="submit"
                >
                    Modifier
                </button>
            </form>


        </div>
    )
}