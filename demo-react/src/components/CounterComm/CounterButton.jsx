import { useState } from "react"

const CounterButton = (props) => {

    // Props (les deux props sont des fonction définie dans le composant parent)
    const { clickReset, clickAdd } = props

    // State
    const [incr, setIncr] = useState(1)

    const handleAdd = () => {
        clickAdd(incr)
    }

    return (
        <div>
            <input type="text" value={incr} onChange={e => setIncr(e.target.value)}/>
            {/* J'appelle une fonction déclaré au dessus  */}
            <button onClick={handleAdd}>Add</button>
            {/* Je déclare directement ma fonction dans le JSX  */}
            <button onClick={() => clickReset(42)}>Reset</button>
        </div>
    )
}

export default CounterButton