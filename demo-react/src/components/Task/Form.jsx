import { click } from "@testing-library/user-event/dist/click"
import { useState } from "react"

const NewTask = (props) => {

    // Props
    const {clickAdd} = props

    // State
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")

    const handleAdd = (e) => {
        e.preventDefault()
        clickAdd(name,description,priority)
    }   

    return (
        <form>
            <label>Name : </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <label>Description : </label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            
            <label>Priority</label>
            <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="elevee">élevée</option>
                <option value="normale">normale</option>
                <option value="faible">faible</option>
            </select>
            <button onClick={handleAdd}>Add</button>
        </form>
    )
}

export default NewTask