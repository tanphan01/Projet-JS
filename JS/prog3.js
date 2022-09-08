const chaine = prompt("Veuillez écrire quelque chose") // bonjour

let result = ""

for (let i = chaine.length - 1; i >= 0; i--) {
    result = result + chaine[i]
}

alert (result)