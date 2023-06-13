import { React, useState, useEffect } from "react";

export default function EditSubject(props) {
    const [formData, setFormData] = useState({
        name: props.name,
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
        await fetch(`https://yonebi-back.vercel.app/api/subjects/${props.id}`, {
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
                    window.location.href = '/admin/subjects'
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
                    <label htmlFor="name">Sujet</label>
                    <input type='text' name="name" value={formData.name} placeholder="Sujet" onChange={handleChange} />
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