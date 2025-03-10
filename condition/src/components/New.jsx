import { useState } from "react"

function New() {
    let [st, Setst] = useState(true)

    let [count,setCount]=useState(0)
    
    function decrement() {
        if (count != 0) {
            setCount(count-1)
        }
    }
    return (
        <>
            <h1>this is new page</h1>
          { /* Ternary operator to use true false on button */}
            {st ? <h1> hapy Birthday</h1> : ""}
            
            <button onClick={() => Setst(false)}>hide</button>
            <button onClick={() => Setst(true)}>show</button>
            <button onClick={() => Setst(!st)}>Toogle</button>


            {/* create a single button that changes button contact on hide and show */}

            <button onClick={() => Setst(!st)}>
                {st ? "hide" : "show"}
                </button>

            {/* making counter that increment or decrement the value not less than zero */}

            <h1>{count}</h1>
            
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={decrement}>-</button>
            




    

           


        </>
    )
}
export default New