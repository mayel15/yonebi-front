import React from "react";
import './Footer.css'

export default function Footer(){
    var date = new Date().getFullYear()
    var text_footer = "yonebi. © "+ date + " | Tous droits réservés"

    return (
      <div className="text-center footer">
            <div>{text_footer}</div>
      </div>  
    )
}