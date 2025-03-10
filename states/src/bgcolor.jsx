import { useState } from "react"

let BgColor = () => {
    let [color,setColor]= useState("lightblue")
    return(
        <>
            
            <div style={{height:"100vh",backgroundColor:color}}>
            
                <h1>change color page</h1>
                
                

            </div>

            <button onClick={() => setColor("red")}>red</button>
            <button onClick={() => setColor("blue")}>blue</button>
            <button onClick={() => setColor("yellow")}>yellow</button>
            <button onClick={() => setColor("green")}>green</button>
            <button onClick={()=>setColor("white")}>white</button>


        
        </>
    )
}
export default BgColor