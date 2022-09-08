import "./Name_age.css"

const Name_age = (props) => {
    const {name, age} = props

    return (
        <div>
        <p className="Name_age">Bienvenue {name} sur l'application React</p>
            <p className={age <= 18 && "red"}>Vous avez {age} ans</p>
            <p className={age > 18 ? "blue" : "red"}>Vous avez {age} ans</p>
            {age > 18 ? (
                <p className="blue">Vous avez {age} ans</p>
            ) : (
                <p className="red">Vous avez {age} ans</p>
            )}
        </div>
    )
}

Name_age.defaultProps = { 
age: 18
}

export default Name_age