class Heroi { 
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;
       switch (this.tipo) {
        case "mago":
            ataque = 'usou magia';
            break;
        case "guerreiro":
            ataque = 'usou espada';
            break;
        case "monge":
            ataque = 'usou artes marciais';
            break;
        case "ninja":
            ataque = 'usou shuriken';
            break;
        default:
            ataque = 'ataque desconhecido';
       } 
       console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

    // criando alguns personagens
    const mago = new Heroi('Gandalf', 2000, 'mago');
    const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
    const monge = new Heroi('Son Goku', 30, 'monge');
    const ninja = new Heroi('Kakashi', 28, 'ninja');

    // fazendo os personagens atacarem
    mago.atacar();
    guerreiro.atacar();
    monge.atacar();
    ninja.atacar();
