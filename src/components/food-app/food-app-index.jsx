import { useCallback } from "react"
import { Link } from "react-router-dom"
export function FoodAppIndex(){

  const Calculate=useCallback(()=>{
    for(var i=1;i<=10000;i++){
        console.log(i)
    }
  },[])

  function HandleCalculate(){
    Calculate()
  }
  function Compute(){
    Calculate();
  }

 
    return(
        <div className="container-fluid">
            <h3>Food App</h3>
            <button onClick={HandleCalculate}>Calculate</button>
            <button onClick={Compute}>Compute</button>
            <Link to="/home">Home</Link>
        </div>
    )
}