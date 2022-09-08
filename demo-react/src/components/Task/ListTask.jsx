import { useState } from "react"
import EnumTask from "./TaskListIem"
import "./Task.css"

const ListTask = (props) => {

    const {tasks} = props
    const {clickFinished} = props
    const {clickDelete} = props

    const tasksJSX = tasks.map(
        task => <EnumTask clickFinished={clickFinished} clickDelete={clickDelete} key={task.id} id={task.id} name={task.name} description={task.description} priority={task.priority} done={task.done}></EnumTask>
    )

    const [bla, setBla] = useState("")
    const [boom, setBoom] = useState("")
    const [bim, setBim] = useState("")

    return (
        <>
            {tasksJSX}
        </>
    )
}

export default ListTask