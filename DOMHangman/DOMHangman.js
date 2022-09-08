// Récupérer des éléments HTML

const hiddenWordHTML = document.querySelector("h2")
const inputHTML = document.querySelector("input")
const testHTML = document.querySelector("button")
const listWordHTML = document.querySelector("ul")

const words = ["coordination", "diffamation", "connection","deviation","straight","abreviation","presumption","location"]

let secretWord
let hiddenWord

function initGame() {
    secretWord = words[Math.floor(Math.random() * words.length)] // "coordination"
    console.log(secretWord)

    hiddenWord =createHiddenWord(secretWord) // "************"
    console.log(hiddenWord)

    hiddenWordHTML.innerText = hiddenWord // On change le texte dans l'html

    // A supprimer

    for (const word of words) {
        const itemHTML = document.createElement("li") // <li></li>
        itemHTML.innerText = word // <li>coordination</li> -> <li>diffamation</li> -> ...
        listWordHTML.appendChild(itemHTML) // <ul><li>coordination</li></ul> -> <ul><li>coordination</li><li>diffamation</li></ul> -> ...
    }
}


function createHiddenWord(sWord) { // "coordination"
    let result = "" // "*" -> "**" -> "***" -> ... -> "************"
    for (const c of sWord) {
        result = result + "*"
    }
    return result
}

function checkIfInWord(letter, sWord) { // "o", "coordination"
    return sWord.includes(letter) // true
}

function generateHiddenWord(hWord, sWord, letter) { // "************", "coordination", "o"
    let result = "" // "*" -> "*o" -> "*oo" -> "*oo*" -> ... -> "*oo*******o*"
    for (let i = 0; i < hWord.length; i++) {
        if (sWord[i] === letter) {
            result = result + letter
        }
        else {
            result = result + hWord[i]
        }
    }
    return result
}

testHTML.addEventListener("click", () => {
    const letter = inputHTML.value // "o"
    if (checkIfInWord(letter, secretWord)) {
        hiddenWord = generateHiddenWord(hiddenWord, secretWord, letter) 
        hiddenWordHTML.innerText = hiddenWord

        if (!hiddenWord.includes("*")) {
            console.log("Won")
        }
    }
})

initGame()
