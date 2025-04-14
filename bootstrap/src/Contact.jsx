import { useContext } from "react"
import { senddata } from "./main"
function Contact() {
    let acceptdata=useContext(senddata)
    return (
        <>
            <h1>data is {acceptdata}</h1>
            <h1>Contact page</h1>
            <senddata.Consumer>
                {
                    (Appdata)=>{return <h1> {Appdata}</h1>}
                }
                </senddata.Consumer>
        </>
    )
}
export default Contact