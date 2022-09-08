const n = parseInt(prompt("Combien de convives vont venir à la tombola ?"))
const romain= []
for (let i = 0; i < n ; i++) {
    const name = prompt("Quel est le nom du convive ?" + (i+1))
    romain.push(name)
}

const winnerindex = Math.floor(Math.random()*n)
let winner = romain[winnerindex]
alert(winner)

