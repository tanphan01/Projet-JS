// Tableau

//Initialiser un tableau avec des valeurs
const tab = ["Riri", "Fifi", "Loulou", 4, false]
tab = []

// Récupération / Modification
const tabIndice1 = tab [1]
tab[1] = "Donald"

// Fonction de tableaux

//Longueur
console.log(tab.length)

//Transformation en String
tab.toString()
tab.join(" ") // "Riri Donald Loulou 4 false "

// Splice
tab.splice(2, 3)

// Attention : modifie le tableau
console.log(tab)

// Slice (ne modifie pas tab mais renvoie un nouveau tableau)
const newTab = tab.slice(0, 1)

console.log(tab)
console.log(newTab)

// Combiner des tableaux
const newConcatTab = tab.concat(newTab)

tab.sort((a, b) => a - b)

// Objet

const salameche = {
    name: "Salamache",
    type: "Feu",
    level: 12
}

console.log(salameche.name)

const dresseur = {
    name: "Sacha",
    pokemons:[
        {
            name: "Carapuce",
            type: "Eau",
            level: 14
        },
        salameche
    ]
}

console.log(dresseur.pokemons[1].type)
console.log(dresseur["pokemons"][1]["type"])

salameche.crier()

// Structure itérative

const nombres = [1,2,3,4,5]

let i = 0
while (i < nombres.length) {
    console.log(tab[i])
    i++
}
// Fori : comme en Java
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

//For of
for (const i of nombres) {
    console.log(nbr)
}

//For in : attention; bcp moins utilisée
for (const i in nombres) {
    console.log(i)  // i représente l'indice
}