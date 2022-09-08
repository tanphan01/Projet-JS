import { useState } from "react"

const Counter = (props) => {

    // Props
    // const {firstParam, secondParam} = props
    const { incrementation } = props

    // State
    // const [value, setValue] = useState(initialValue)
    const [counter, setCounter] = useState(0)

    // Fonction d'évenement
    const handleClick = () => {
        setCounter(p => p + incrementation)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return (
        <div>
            <div>
            {counter}
            <input type="button" onClick={handleReset} value="Reset"/>
            <button onClick={handleClick}>+</button>
            </div>
        </div>

    )

}

export default Counter