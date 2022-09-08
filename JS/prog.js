const annee = parseInt(prompt("Entrer une année: "))
if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0))
    alert("annee bissextile")
else
    alert("annee non bissextile")