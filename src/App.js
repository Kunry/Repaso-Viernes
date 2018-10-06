import React, { Component } from "react";

import { FilterData } from "./Component/FilterData";
import {Search} from "./Component/Search";

import { data } from "./data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      search: "", //Guardamos lo que tenemos en el input de busqueda
      checkbox: false //Guardamos como está nuestro checkbox
    };
  }

  /* Dividimos la busqueda y el checkbox para poder hacer que los dos funcionen correctamente y filtren ambas. */

  Search(search, checkbox) {
    let newdata = search;
    newdata = data.filter(e => {      // Para hacer un mejor filtro siempre es bueno utilizar Expresiones Regulares
        const expReg = new RegExp(newdata, "ig") // Se declara RegExp con el valor del input, se le dice que no diferencie entre mayusculas y minusculas (i), y que busque en todo el string (g)
        return expReg.test(e.name) // se utiliza la propiedad test() que nos devuelve true o false si encuentra algún valor
    })  
    // newdata = data.filter(e => e.name.includes(newdata)); // Con esta tambien os vale, pera para que veáis otra forma de hacer.
    this.setState({ data: newdata, search }, () => {
      this.Checkbox(checkbox);
    });
  }
  // Está es la función que hace el filtro del checkbox
  Checkbox(checkbox) {
    const newdata = this.state.data.filter(
      e => (!checkbox ? true : e.stocked == checkbox)
    );
    this.setState({ data: newdata, checkbox });
  }

  // Decimos que datos tienen que ir con cada uno, si lo que recibimos es un string el valor del input es de text y le damos el valor por defecto al checkbox, sino lo hacemos al contrario.
  Data(input) {
    if (typeof input == "string") {
      this.Search(input, this.state.checkbox);
    } else {
      this.Search(this.state.search, input);
    }
  }
  render() {
    return (
      <div>
        <h1>PEPE ES EL MEJOR!!!!!!</h1>
        <Search search={e => this.Data(e)} />   {/* Pasamos la función al hijo para que este pueda acceder a ella*/}
        <FilterData data={this.state.data} />  {/* *NOTA EN FILTERDATA* */}
      </div>
    );
  }
}
