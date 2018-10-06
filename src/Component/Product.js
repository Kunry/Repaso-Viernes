import React from "react";

export const Product = ({name, price, stocked}) => {
    const style = stocked ? "black" : "red"; // Preguntamos si tenemos stock, si es false le damos el valor rojo
    return(
        <div style={{color:style}}>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}