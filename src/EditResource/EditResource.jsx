import { React, useState, useEffect } from "react";



export default function AddResource() {
    const [formData, setFormData] = useState({
        title: "",
        url: "",
        description: "",
        authors: "",
        subject: "",
        category: "",
    });

    const [temoinS, setTemoinS] = useState(false)
    const [temoinC, setTemoinC] = useState(false)
    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [rsources, s] = useState([]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(formData.title === "" 
        || formData.url === ""
        || formData.description === ""
        || formData.authors === ""
        || formData.subject === ""
        || formData.category === ""){
            alert('Au moins un champ du formulaire est vide. :(')
        }else{
        await fetch('http://localhost:8000/api/resources/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                window.location.href = '/admin/home'
            })
            .catch((error) => {
                console.error(error);
            });
        }
    };

    const toggleS = () => {
        (temoinS) 
        ? setTemoinS(false)
        : setTemoinS(true)
    }

    const toggleC = () => {
        (temoinC) 
        ? setTemoinC(false)
        : setTemoinC(true)
    }




    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await fetch('http://localhost:8000/api/categories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);

                const subjectsResponse = await fetch('http://localhost:8000/api/subjects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const subjectsData = await subjectsResponse.json();
                setSubjects(subjectsData);

                const resourcesResponse = await fetch('http://localhost:8000/api/resources', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const resourcesData = await subjectsResponse.json();
                const resourcesFiltered = resourcesData.filter((r)=>{}).
                setFormData(subjectsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <button
                onClick={toggleS}
            >
                {(!temoinS) 
                ? <div>Ajouter un sujet</div> 
                : <div>Sélectionner un sujet</div>  
                }
            </button>
            <button
                onClick={toggleC}
            >
                {(!temoinS) 
                ? <div>Ajouter un catégorie</div> 
                : <div>Sélectionner une catégorie</div>  
                }
            </button>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titre</label>
                    <input type='text' name="title" value={formData.title} placeholder="Titre" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="url" >Lien</label>
                    <input type='text' name="url" value={formData.url} placeholder="url" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type='text' name="description" value={formData.description} placeholder="Description" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="authors">Auteurs</label>
                    <input type='text' name="authors" value={formData.authors} placeholder="Auteurs / Sources" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>

                    {
                        (temoinS)
                            ? (
                                <input type='text' name="subject" value={formData.subject} placeholder="Sujet" onChange={handleChange} />
                            )
                            : (
                                <select value={formData.subject} name="subject" onChange={handleChange}>
                                    <option value="">Select an option</option>
                                    {subjects.map((s)=>{
                                        return(<option value={s.name} > {s.name} </option>)
                                    })}
                                </select>
                            )

                    }</div>

                <div>
                    <label htmlFor="category">Catégorie</label>

                    {
                        (temoinC)
                            ? (
                                <input type="text" name="category" value={formData.category} placeholder="Catégorie" onChange={handleChange} />
                            )
                            : (
                                <select value={formData.category} name="category" onChange={handleChange}>
                                    <option value="">Select an option</option>
                                    {categories.map((c)=>{
                                        return(<option value={c.name}> {c.name} </option>)
                                    })}
                                </select>
                            )

                    }
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