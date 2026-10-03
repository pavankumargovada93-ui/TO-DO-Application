import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useFilter } from "../Hooks/filterdata";
import searchString from "react";
import { Link } from "react-router-dom";
export function FoodAppHome(){
   const [searchString,setSearchString]=useState("")
    const[electronics]=useState(['sony tv','samsung tv',"samsung mobile",'sony mobile',"apple macbook","Apple iphone"])
    
    function handleSearchString(e){
        setSearchString(e.target.value);
    }
    let filteredData=useFilter(searchString,electronics)
    return(
        <div className="container-fluid">
            <h3>Food App Home</h3>
            <input type="text" onChange={handleSearchString} placeholder="search products"/>
            <ol>
                {
                    filteredData.map(item=><li key={item}>{item}</li>)
                }
            </ol>
            <Link to="list">Get List</Link>
            <hr/>
            <Outlet/>
        </div>
    )
}