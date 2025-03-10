const Event = () => {
    function fun() {
        alert("Clicked.......")
    }
    return (
        <>
            
            <h2>Event Page</h2>
            <button onClick={fun}>Button</button>
            <button onDoubleClick={fun}>Button</button>
            <button onMouseEnter={fun}>Button</button>
            <button onMouseLeave={fun}>Button</button>
            <button onMouseOver={fun}>Button</button>
        
        </>
    )
}
export default Event