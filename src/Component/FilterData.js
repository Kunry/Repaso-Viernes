import React from "react";
import _ from "lodash";

import {Category} from "./Category";
import {Product} from "./Product";

import {data} from "../data"; //Si se pone las llaves evitamos tener que escribir data.data


export const FilterData = () => {
    
    /*------------------------*/

    const filterForEach = {};
    data.forEach(e => {
        if(filterForEach[e.category]){
            filterForEach[e.category].push(e);
        }else {
            filterForEach[e.category] = [e];
        }
        /*------------------------*/
        /* Se puede utilizar el operador ternario para esto y hacerlo en una sola linea:
        
        filterForEach[e.category] ? filterForEach[e.category].push(e) : filterForEach[e.category]=[e];
        */
    });
    console.log(filterForEach);

    /*------------------------*/

    

    const filterReduce = data.reduce((acc, e) => {
        if(acc[e.category]){
            acc[e.category].push(e);
        } else {
            acc[e.category] = [e];
        }
        return acc;
    },{})
       console.log(filterReduce);
       
    /*------------------------*/ //Recordar que está bien utilizar lodash, pero siempre sabiendo lo que hace.
    const filterLodash = _.groupBy(data, e => e.category);

    console.log(filterLodash);


    return(
        <div>
            <h1>PEPE ES EL MEJOR!!!!!!</h1>
            {
                Object.keys(filterLodash).map( (category, ic) => {
                    return(
                        <div key={ic}>
                            <Category category={category}/>
                            {
                                Object.values(filterLodash[category]).map( (product, ip) =>{
                                    return(
                                        <div key={ip}>
                                            <Product {...product}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}