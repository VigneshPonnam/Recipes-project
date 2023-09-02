import React from "react";

const Recipie= ({title,calories,image,ingredients})=>{
    return(
        <div>
            <h2 className="title">{title}</h2>
            <h4>{calories}</h4>
            <img src={image} className="image" alt="Image" />                       
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipie;