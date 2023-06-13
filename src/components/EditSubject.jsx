import { React, useState, useEffect } from "react";

export default function EditSubject(props) {
    const [formData, setFormData] = useState({
        name: props.title,
    });

    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await fetch('https://yonebi-back.vercel.app/api/categories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);

                const subjectsResponse = await fetch('https://yonebi-back.vercel.app/api/subjects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const subjectsData = await subjectsResponse.json();
                setSubjects(subjectsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="text-center">

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Titre</label>
                    <input type='text' name="name" value={props.name} placeholder="Sujet" onChange={handleChange} />
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