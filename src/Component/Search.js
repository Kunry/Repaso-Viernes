import React, {Component} from "react";





export default class Search extends Component {
    constructor(props){
        super();
        this.search = props.search;
    }
    render(){
        return(
            <div>
            <input type="text" onChange={e => this.search(e.target.value)} />
            <input type="checkbox" onChange={e => this.search(e.target.checked)}/>
            </div>
    )
    }
}