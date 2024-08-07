const prompt = require('prompt-sync')();

const faculdade = require('./modulos/faculdade.js');

console.log("-".repeat(25))
console.log(" Gerenciamento FACULDADE ")
console.log("-".repeat(25))

while(true){
    console.log(`Como deseja prosseguir: 
        1. Faculdade
        2. Aluno
        3. Sair
        `)

    const user = parseInt(prompt());

    let continuar;

    switch (user){
        case 1:
            continuar = true;
            while(continuar){
                console.log(`
                    Gerenciamento da Faculdade

                    1. Criar
                    2. Listar
                    3. Atualizar
                    4. Remover
                    5. Sair`);

                const opcaoAcao = parseInt(prompt());

                switch(opcaoAcao){
                    case 1:
                        //criar
                        break;
                    case 2:
                        //LIstar
                        break;
                    case 3:
                        //Atualizar
                        break;
                    case 4:
                        //Remover
                        break;
                    case 5:
                        continuar = false;
                        break;
                    default: 
                        console.log("Opção inválida: ");
                        break;
                    }
                }
        case 2:
            continuar = true;
            while(continuar){
                console.log(`
                    Gerenciamento do Aluno
                    
                    1. Criar
                    2. Listar
                    3. Atualizar
                    4. Remover
                    5. Sair`);

                const opcaoAcao = parseInt(prompt());
                
                switch(opcaoAcao){
                    case 1:
                        //criar
                        break;
                    case 2:
                        //LIstar
                        break;
                    case 3:
                        //Atualizar
                        break;
                    case 4:
                        //Remover
                        break;
                    case 5:
                        continuar = false;
                        break;
                    default: 
                        console.log("Opção inválida: ");
                        break;
                    }
                }
                break;
                case 3:
                    process.exit();
                    break;
                default:
                    console.log("Opção inválida: ")
                    break;
    }
    }