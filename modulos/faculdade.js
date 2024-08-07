const prompt = require('prompt-sync')();

const db = []

let ultimoId = 0;

function getIndice(array, id) {
    const indice = array.findIndex((el) => el.id == id);
    if (indice == -1) {
        console.log("ID inexistente");
    }
    return indice;
}

const modelo = (id = ++ultimoId) => {
    const nome = prompt("Qual o nome do curso: ");
    const inicio = prompt("Data de inicio do curso: "); //buscar um metodo que converte visualmente em data
    const termino = prompt("Quando termina o curso: ");

    if(nome !== "" && inicio !== "" && termino !== ""){
        return{
            id,
            nome, 
            inicio,
            termino
        };
    } else{
        console.log("Dados inválidos: ");
        return undefined;
    }
}

