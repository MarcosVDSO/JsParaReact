var a = 50;
let b = 100;
const d = 5222;

console.log(a,b)

console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

const Pessoa = {
    nome: "marcos",
    idade: 19,
    curso: "Ciência da Computação",
    endereço : {
        rua: "Renato Archer",
        numero: 126,
        bairro: "Nova pedreiras"

    }

}

console.log(Pessoa.idade)

console.log(Pessoa.endereço.bairro)
console.log(Pessoa.curso);
console.log(Pessoa.endereço.rua);

const {nome, idade} = Pessoa

console.log(nome, idade);

const{idade: id, curso: cs} = Pessoa
console.log(id, cs);

const {endereço: {rua, numero, bairro, quadra = 21} } = Pessoa

console.log(rua, numero, bairro, quadra)

const [n1, n2, n3, n4, n5] = [25, 66, 36, 699]

console.log(n1, n2, n3, n4)

function rand({min = 10, max = 50}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor);
}

const obj = {min: 25, max: 152}

console.log(rand(obj))
console.log(rand({min: 12}))
console.log(rand({}))

function rand2([min = 10, max = 50]) {
    if(min>max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor);
}
    
console.log(rand2([50, 40]))