const obj = [
    {
    "nome": "Gabriel",
    "idade": 30,
    "esta trabalhando": true,
    "detalhes_profissao":{
        "profissao": "Separador",
        "empresa": "Toscana"
    },
    "hobbies": [ "Programar", "correr", "ler"]
    },

    {
    "nome": "Shurek",
    "idade": 30,
    "esta trabalhando": false,
    "detalhes_profissao":{
        "profissao": null,
        "empresa": null
    },
    "hobbies": [ "Programar", "correr", "ler"]
    },
]
//json
//converter objeto para json
const jsonData = JSON.stringify(obj)

console.log(jsonData)
console.log(typeof jsonData)

//converter json para objeto
const objData= JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})