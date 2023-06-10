import React from "react";
import './Resource.css'

export default function Resource(props){

    return (
        <div className="resource-card col-lg-12">
            <h3> <a href={props.url} target="blank">{props.title}</a></h3>
            <div>{props.description}</div>
            <div>Auteurs / Sources : {props.authors}</div>
            <div>{props.subject + " > " +props.category}</div>
            <p>{props.addedAt}</p>  
        </div>
    )
}