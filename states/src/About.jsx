import { useState } from "react"

function About() {
    let [arr, setArr] = useState({
        name:"Nitin",contact:87199
    })

    let [arrData, setData] = useState([
        24, "minal","bhopal",101
    ])

    let [color, changeColor] = useState("black")
    
    let [dd,Setdd]=useState("happy Birthday")
    return (
        <>
            <h4>This is About page</h4>
            <p>this is about me {arr.name} and {arr.contact}</p>
            
            <h2>personal information</h2>

            <h4>my age is {arrData[0]} </h4>
            <h4>my address is {arrData[1]} </h4>
            <h4>my city is {arrData[2]} </h4>
            <h4>my id is {arrData[3]} </h4>
        
            <button onClick={() => setArr({ name: "patel", contact: 85552 })}>updata data</button>
            <button onClick={() => setData([56, "minal5", "mumbai", 105])}>change array daata</button>
            
        
            <div className="theme" style={{backgroundColor:color,height:"100vh"}}>
                this is theme page
            </div>
            <button onClick={()=>changeColor("white")}>white</button>
            <button onClick={() => changeColor("black")}>black</button>

            <h1>{dd }</h1>
            
            <button onClick={() => Setdd("")}>hide</button>
            <button onClick={()=>Setdd("happy Birthday")}>show</button>
        </>
    )
}
export default About