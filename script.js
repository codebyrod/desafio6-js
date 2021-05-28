
// 1. Crie um objeto que receba ao menos três propriedades sobre você.
let perfil = {
    nome: "Rodrigo",
    idade: 27,
    homemCis: true,
    amigos: ["Isecreusson", "Amidonaldino", "Jibirinto", "Armando"]
}

console.log(perfil)

// 2. Adicione uma nova propriedade sem alterar seu objeto inicial.
perfil.time = "XX de Novembro"

// 3. Remova uma propriedade desse objeto.
delete perfil.time

// 4. Mostre no console todas as propriedades desse objeto.
console.log(perfil)

// 5. Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// 5.1 Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// 5.2 Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "José",
        idade: 53,
        telefone: "1010-1010",
        amigos: ["Vitor", "Ramires", "Vanessa", "Alberto"]

    }, 
    {
        nome: "João",
        idade: 46,
        telefone: "2020-1111",
        amigos: ["Artur", "Joana", "Carol", "Marcos", "Yuri"]
    }, 
    {
        nome: "Maria",
        idade: 50,
        telefone: "3030-1212",
        amigos: ["Miranda", "Luana", "Taís", "Jeferson", "Janaína"]
    }, 
    {
        nome: "Claudia",
        idade: 39,
        telefone: "4040-1313",
        amigos: ["Gilberto", "Tamires", "Denilson", "Heitor", "Fábio"]
    }, 
    {
        nome: "Fabiano",
        idade: 42,
        telefone: "5050-1414",
        amigos: ["Samanta", "Bruno", "Edigar", "Jonas", "Augusto" ]
    }
]

//bonus mostrando na tela os objetos
console.log(cadastro)

// 6. Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0], cadastro[1].amigos[4], cadastro[2].amigos[3], cadastro[3].amigos[2] )