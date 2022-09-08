import { useState } from "react"

const EventComponent = () => {

    const [txt, setTxt] = useState("azerty") // txt = valeur du state | setTxt = function permettant de changer le state | "" = valeur initial du state
    const [input, setInput] = useState("")
    const [pokemon, setPokemon] = useState("bulbizarre")

    const handleReset = () => {
        setInput("")
    }

    const handleAdd = () => {
        setInput(p => p + "o")
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <div>
                {input}
            </div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>Add</button>
            <select value={pokemon} onChange={e => setPokemon(e.target.value)}>
                <option value="salameche">Salameche</option>
                <option value="bulbizarre">Bulbizarre</option>
                <option value="carapuce">Carapuce</option>
            </select>
            <div>
                {pokemon}
            </div>
        </div>
    )
}

export default EventComponent