class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`${this.nome} fez um barulho, ele tem ${this.idade} anos!`);
    }
}

class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade);
    }

    falar() {
        console.log(`${this.nome} latiu, ele tem ${this.idade} anos!`)
    }
}

class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade)
    }

    falar() {
        console.log(`${this.nome} miou, ele tem ${this.idade} anos!`)
    }
}

const animal = new Animal("Um animal", 5);
const cachorro = new Cachorro("Symba", 2);
const gato = new Gato("Toddynho", 3);

animal.falar();
cachorro.falar();
gato.falar();