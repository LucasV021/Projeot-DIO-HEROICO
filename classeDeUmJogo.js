var perfil = {
    name : "Lucas",
    age : 1000,
    tipo : "mago"
} 
console.log(`o ${perfil.tipo} de nome ${perfil.name},um ancião com idade q ultrapassa os ${perfil.age} aparece para lutar `)
class mago {
    constructor(tipo,ataque){
        this.tipo = tipo
        this.ataque = ataque
    }
    escrever(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque} e destruiu o campo de batalha mais de 50mil mortos, O MAGO É IMPLACAVEL`)
    }
}
var batalha = new mago ("mago","magia")
batalha.escrever()