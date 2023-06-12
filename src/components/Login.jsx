import React, { useState } from "react";

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(formData.username==="" || formData.password===""){
            alert('Au moins un champ du formulaire est vide. :(')
        }else{
        
        await fetch(`https://yonebi-back.vercel.app/api/useradmin/${props.access}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                (props.access === "login")
                ? window.location.href = '/yonebi-front/admin/home'
                : window.location.href = '/yonebi-front/admin/login'
            })
            .catch((error) => {
                console.error(error);
            });

        }
    };

    return (
        <form className="text-center" onSubmit={handleSubmit}>
            {
                (props.access === "login")
                ? <h1>Se connecter</h1>
                : <h1>S'inscrire </h1>
            }
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Mot de passe"
                    onChange={handleChange}
                />
            </div>
            {
                (props.access === "signup")
                ? (
                    <div>
                    <label htmlFor="passwordSecurity">Mot de passe de securite</label>
                    <input
                    type="password"
                    name="password"
                    value={formData.passwordSecurity}
                    placeholder="Mot de passe de securite"
                    onChange={handleChange}
                    />
                    </div>
                )   
                : <div></div>
            }
            <button type="submit">Se connecter</button>
        </form>
    );
}
