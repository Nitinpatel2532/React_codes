import { useState } from "react"
import BgColor from "./bgcolor"
import About from "./About"
function App() {

  //states

  let [name, setName] = useState("nitin")
  let [age, setAge] = useState("24")
  let [email, setEmail] = useState("nitinpatel@gmail.com")
  function fun() {
    setName("Cybrom")
  }


  return (
    <>
      <BgColor/>
      <h1> this is App page by {name}</h1>
      <h1>your age is {age} </h1>
      <h1>your email is { email}</h1>
  
      <button onClick={fun}>change name</button>    
      <button onClick={()=>setAge(25)}>age</button>
      <button onClick={()=>setEmail("nitinpatel74084@gmail.com")}>email</button>

      <About/>
    </>
  )
}
export default App