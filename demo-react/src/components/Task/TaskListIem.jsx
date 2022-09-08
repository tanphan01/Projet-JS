const EnumTask = (props) => {

    const {id, name, description, priority, done} = props

    const {clickFinished} = props
    const {clickDelete} = props

    const handlefinished = () => {
        clickFinished(id)
    }

    const handledelete = () => {
        clickDelete(id)
    }

    return (
        <div className="item-container">
            <div className="task-item-container">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{priority}</p>
                <p>{done.toString()}</p>
            </div>

            <div className="button-item-container">
                <button onClick={handlefinished}disabled={done}>Terminer</button>
                <button onClick={handledelete}>Supprimer</button>
            </div>
        </div>
    )
}

export default EnumTask