import { useState } from "react"
import Counter from "./Counter"
import CounterButton from "./CounterButton"

const CounterComm = () => {

    const [counter, setCounter] = useState(0)

    const resetCounter = (nbr) => {
        console.log(nbr)
        setCounter(0)
    }

    const addCounter = (incr) => {
        setCounter(p => p + parseInt(incr))
    }

    return (
        <div>
            <h1>CounterComm</h1>
            <Counter counter={counter}></Counter>
            <CounterButton clickAdd={addCounter} clickReset={resetCounter}></CounterButton>
        </div>
    )
}

export default CounterComm