import React from "react";

export const Search = ({search}) =>  {
  
    return (
      <div>
        <input type="text" onChange={e => search(e.target.value)} /> 
        <input type="checkbox" onChange={e => search(e.target.checked)} />
      </div>
    );
  
}
