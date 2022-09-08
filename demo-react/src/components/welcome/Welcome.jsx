import "./Welcome.css"

const Welcome = (props) => {

    // Props
    const {name} = props

    return (
        <h1>Bonjour {name}</h1>
    )
}

export default Welcome