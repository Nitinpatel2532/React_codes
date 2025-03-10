import Child2 from "./Child2"
import Child3 from "./Child3"


function Child1(props) {
    return (
        <>
            <h1>my name is {props.name}</h1>
            <Child2 lastname="patel" />
            <Child3/>
        </>
    )
}
export default Child1