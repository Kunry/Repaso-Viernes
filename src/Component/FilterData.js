import React from "react";
import _ from "lodash";

import { Category } from "./Category";
import { Product } from "./Product";

export const FilterData = ({ data }) => {
  // /*------------------------*/ // ForEach

  // const filterForEach = {};
  // data.forEach(e => {
  //     if(filterForEach[e.category]){
  //         filterForEach[e.category].push(e);
  //     }else {
  //         filterForEach[e.category] = [e];
  //     }
  //     /*------------------------*/
  //     /* Se puede utilizar el operador ternario para esto y hacerlo en una sola linea:

  //     filterForEach[e.category] ? filterForEach[e.category].push(e) : filterForEach[e.category]=[e];
  //     */
  // });
  // console.log(filterForEach);

  // /*------------------------*/  // Reduce

  // const filterReduce = data.reduce((acc, e) => {
  //     if(acc[e.category]){
  //         acc[e.category].push(e);
  //     } else {
  //         acc[e.category] = [e];
  //     }
  //     return acc;
  // },{})
  //    console.log(filterReduce);

  // /*------------------------*/ //Recordar que está bien utilizar lodash, pero siempre sabiendo lo que hace.
  
  
  /* *LA NOTA DE APP* */
  // Despues de tener toda la información que queremos la volvemos construir como nosotros queremos para poder imprimirla bien.
  
  const filterLodash = _.groupBy(data, e => e.category);

  // console.log(filterLodash);

  return (
    <div>
      {Object.keys(filterLodash).map((category, ic) => { //Recorremos y pintamos con los componentes correspondientes.
        return (
          <div key={ic}>
            <Category category={category} />
            {Object.values(filterLodash[category]).map((product, ip) => {
              return (
                <div key={ip}>
                  <Product {...product} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
