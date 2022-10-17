//ctrl + alt + n (executa)
/*
const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this. saudacao)
    }
}

pessoa.falar()

const falarDEPessoa = pessoa.falar.bind(pessoa)

falarDEPessoa()
*/

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        self.idade++
        const self = this
        console.log(self.idade)
    }/*.bind(this)*/, 1000)

    
}
new Pessoa