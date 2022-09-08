const number = prompt("Un nombre stp: ")
const op = prompt("Entrez un opérateur (+, -, *, /)")
let resultat = 0

switch (op) {
    case "+":
        resultat = parseInt(nb1) + parseInt(nb2)
        break;
    case "-":
        resultat = nb1 - nb2
        break;
    case "*":
        resultat = nb1 * nb2
        break;
    case "/":
        resultat = nb1 / nb2
        break;
    default:
        resultat = "Erreur"
        break
}
    
if (resultat === "Erreur") {
    alert("L'opérateur n'existe pas")
}
else {
    alert(`${nb1} ${op} ${nb2} = ${resultat}`)
}