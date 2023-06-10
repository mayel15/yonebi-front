import React from "react";
export default function Resource(props){

    return (
        <div className="resource col-lg-6">
            <h1> <a href={props.url} target="blank">{props.title}</a> </h1>
            <p>{props.description}</p>
            <p><strong>Auteurs</strong> : {props.authors}</p>
            <p>Ajouté : {props.addedAt}</p>
            <p>{props.subject + " > " +props.category}</p>
            
        </div>
    )
}