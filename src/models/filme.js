const { v4: uuidv4 } = require('uuid');

class Filme {
    constructor({ nome, genero, diretor, ano }) {
        this.id = uuidv4();
        this.nome = nome;
        this.genero = genero;
        this.diretor = diretor;
        this.ano = ano;
    }

    play() {
        console.log(`Assistindo ${this.nome}`);
    }
}

module.exports = Filme;
