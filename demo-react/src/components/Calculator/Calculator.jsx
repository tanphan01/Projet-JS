import { isClickableInput } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

const Calculator = () => {

    // Props

    // State
    const[number1, setNumber1] = useState("")
    const[number2, setNumber2] = useState("")
    const[operator, setOperator] = useState("+")
    const[result, setResult] = useState("")

    // Function
    const calculer = function (e) {
        e.preventDefault();     
       
        switch(operator) {
            case "+":
                setResult(parseInt(number1) + parseInt (number2))
                break
            case "-":
                setResult(parseInt(number1) - parseInt (number2))
                break
            case "*":
                setResult(parseInt(number1) * parseInt (number2))
                break
            case "/":
                setResult(parseInt(number1) / parseInt (number2))
                break
        }

    }
    
    return (
        <form action="" onSubmit={calculer}>
            <label htmlFor="number">Enter a number</label>
            <input type="number" value={number1} onChange={e => setNumber1(e.target.value)}></input>
            <input type="number" value={number2} onChange={e => setNumber2(e.target.value)}></input>
            <select id="nav" value={operator} onChange={ ( e ) => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>   
            <input type="submit" value="Calculer"/> 
            <input id= 'result' type='number' value={result} readOnly/>
        </form>
    )

}

export default Calculator