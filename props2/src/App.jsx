import Event from "./Event"

function App() {

  // varibale is always declared top of return

  let name = "Nitin"
  // let age = prompt("Enter age")  //run two or more times
  
  // objects
  let employee = {
    Emp_name: "Bob",
    Emp_id: "101",
    Emp_age: 25,
    Emp_salary: 25000,
    Emp_city:"pune"
  }

  // array 
  let skills=["html","css","js","react","cpp","python","sql"]
  return (
    <>
      <h2>welcome {name}</h2>
      <h3>Employe Information</h3>
      <p>Employee_name: {employee.Emp_name}</p>
      <p>Employee_id: {employee.Emp_id}</p>
      <p>Employee_age: {employee.Emp_age}</p>
      <p>Employee_salary: {employee.Emp_salary}</p>
      <p>Employee_city: {employee.Emp_city}</p>

      <p>skills:{skills[0]}</p>
      <p>skills:{skills[1]}</p>
      <p>skills:{skills[2]}</p>
      <p>skills:{skills[3]}</p>
      <p>skills:{skills[4]}</p>
      <p>skills:{skills[5]}</p>
      <p>skills:{skills[6]}</p>


      {/* Event Page */}

      <Event/>
      
    </>
  )
}
export default App