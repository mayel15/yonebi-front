import { React, useState, useEffect } from "react";
import Category from "../Category/Category";
import GestionButtons from "../GestionButtons/GestionButtons";

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch("https://yonebi-back.vercel.app/api/categories/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();

                console.log(data);
                setCategories(data);
            } catch (error) {
                console.error(error);
            }
        };

        getCategories();
    }, []);

    return (
        <div className=" content-section ">
            <GestionButtons />
            <h3 className="text-center col-lg-12 content-center">Gérer les catégories</h3>
            <div className="content-center row">

                {
                    categories.map((c, index) => (
                        <Category
                            key={c.id}
                            name={c.name}
                            subject={c.subject}
                            id={c._id}
                        />)
                    )
                }
            </div>
        </div>

    )
}