function multplierPar2(x) {
    return x * 2
}

console.log(multplierPar2(5))

const multplierPar3 = function(x) {
    return x * 3
}

console.log(multplierPar3(5))

const multplierPar4 = (x) => {
    return x * 4
}

console.log(multplierPar4(5))

const multplierPar5 = x => x*5

setTimeout(() => {
    console.log("Bonjour")
}, 2000)

function changer2emeElement(list) {
    list[1] = 0
}

const tab = [1, 2, 3]

changer2emeElement(tab)

console.log(tab)

function levelUp(pokemon) {
    pokemon.levelUp +=1
}

const salameche = {
    name: "Salameche",
    type: "Feu",
    level: 12
}

levelUp(salameche)

console.log(salameche)