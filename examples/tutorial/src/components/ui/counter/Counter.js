import {useState} from "react"

const Counter = ({
    counterText,
    initialCount = 0,
    onAdd = () => {},
    onSubstract = () => {},
}) => {
    const [count, setCount] = useState(initialCount);
    const handleAdd = event => {
        setCount(count => count + 1);
        onAdd(event);
    }
    const handleSubstract = event => {
        setCount(count => count - 1);
        onSubstract(event);
    }
    return <div>
        <button onClick = {handleSubstract}>
            -
        </button>
        <span>{counterText} {count}</span>
        <button onClick = {handleAdd}>
            +
        </button>
    </div>
}

export default Counter;