import React, {Component} from "react";
import _ from "lodash";

import {FilterData} from "./Component/FilterData";
import Search  from "./Component/Search";

import {data} from "./data.json";

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            data:_.groupBy(data, e => e.category),
            search:"",
            checkbox: false
        }
    }

    /* Dividimos la busqueda y el checkbox para poder hacer que los dos funcionen correctamente y filtren ambas. */

    Search(search, checkbox){
        let _data= search;
        _data = data.filter(e => e.name.includes(_data))
        this.setState({data:_data, search}, () => {
            this.Checkbox(checkbox)
        })
    }

    Checkbox(checkbox){
        const _data = this.state.data.filter(e => !checkbox ? true :e.stocked == checkbox);
        console.log(_data)
        this.setState({data:_data, checkbox}, () => {
            this.Filter();
        });
    }
    Filter(){
        const _data = _.groupBy(this.state.data, e => e.category);
        this.setState({data:_data})
    }

    Data(input){
        if(typeof input == "string"){
            this.Search(input, this.state.checkbox);

        }else {
            this.Search(this.state.search, input);
        }

    }
    render(){
        
        return(
            <div>
                <h1>PEPE ES EL MEJOR!!!!!!</h1>
                <Search search={(e) => this.Data(e)} />
                <FilterData {...this.state.data} />
            </div>
        )
    }
}