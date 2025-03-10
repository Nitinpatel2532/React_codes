import Ch2 from "./ch2"
let Ch = (props) => {
    
    // destrucutre of props
    let {name}=props
    return (
        <>
            <h1> this is Child Page</h1>
            <h2>name is {name}</h2>

            <Ch2 fullname={props} />
        </>
    )
}
export default Ch