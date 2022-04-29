import React from "react";
import './Recipe.css';


const Recipe=({title,calories,image})=>{
    return(
<div className="recipe">
    <h2 className="title">{title}</h2>
    <p className="calories">calories:{calories}</p>
    <img src={image} alt="" className="image"/>

</div>
    )
}
export default Recipe;