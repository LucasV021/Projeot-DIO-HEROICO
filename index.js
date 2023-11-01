
// Desafio de classificação
var nomeDoHeroi = "Lucas Vieira Ferrari"
var xpDoHeroi = 2000.000
var definicao = ""
if(xpDoHeroi === 1000){
    definicao = "Ferro"
}
else if (xpDoHeroi >1.001 && xpDoHeroi <=2.000){
    definicao = "Bronze"
}
else if (xpDoHeroi >2.001 && xpDoHeroi <=2.001){
    definicao = "Prata"
}
else if(xpDoHeroi >6.000 && xpDoHeroi <=7.000){
    definicao = "Ouro"
}
else if (xpDoHeroi > 7.001 && xpDoHeroi <=8.000){
    definicao = "Platina"
}
else if (xpDoHeroi >8.001  && xpDoHeroi <=9.000){
    definicao = "Ascendente"
}
else if (xpDoHeroi >9.001  && xpDoHeroi <=10.000){
    definicao = "Imortal"
}
else {
    definicao = "Radiante"
}
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${definicao } com uma quantidade incrivel de XP de ${xpDoHeroi} `)