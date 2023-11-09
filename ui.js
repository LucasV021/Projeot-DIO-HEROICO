class heroi {
    constructor(name, idade, tipo) {
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        var ataque = "";
        if (this.tipo === "mago") {
            ataque = "usou magia";
        }
        if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        }
        if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        }
        if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        }
        console.log(`O ${this.tipo} ${this.name} atacou usando ${ataque}`);
    }
}

var perfil = new heroi("lucas", 10000, "guerreiro");
console.log(`O ${perfil.tipo} de nome ${perfil.name}, um ancião com idade que ultrapassa os ${perfil.idade} aparece para lutar.`);
perfil.atacar();
