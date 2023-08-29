const leitor=require("readline-sync")

const dados = []
let senha = []
let saldo = 0
let extrato = []
posicao = 0




function submenu() {

    console.log("\n")
    console.log("Bem vindo ao banco SENAC LTDA!")
    console.log("1 - Informar dados cadastrais do cliente")
    console.log("2 - Informar senha do cliente")
    console.log("0 - Sair")

    let opcao = leitor.questionInt("Digite a opção desejada: ")

    switch (opcao) {

        case 1:
            informarDados()
            break;
        case 2:
            informarSenha()
            break;
        case 0:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção inválida")
            setTimeout(() => {
                menu()
            }, 500)
    }
}

    function informarDados() {

        let dados = leitor.question("Informe seus dados: [S ou N]")
        if(dados === 'S') {
        let nome = leitor.question("Digite seu nome: ")
        let data = leitor.questionInt("Digite sua data de nascimento: ")
        let idade = leitor.questionInt("Digite sua idade: ")
        let genero = leitor.question("Qual o seu sexo? ")
        let cpf = leitor.questionInt("Digite o seu CPF: ")
    } else {
       submenu()
    }
    submenu()

    }

    function informarSenha() {

        senha = leitor.question("Informe sua senha: ")
        console.log("Sua nova senha é:",senha)

        menu()
    }
    

function menu() {

    console.log("\n")
    console.log("Bem vindo ao banco SENAC LTDA!")
    console.log("1 - Atualizar dados cadastrais do cliente")
    console.log("2 - Atualizar senha do cliente")
    console.log("3 - Realizar depósito")
    console.log("4 - Realizar saque")
    console.log("5 - Realizar empréstimo")
    console.log("6 - Visualizar saldo")
    console.log("7 - Visualizar extrato")
    console.log("0 - Sair")

    let opcao = leitor.questionInt("Digite a opção desejada: ")

    switch (opcao) {

        case 1:
            atualizarDados()
            break;
        case 2:
            atualizarSenha()
            break;
        case 3:
            realizarDeposito()
            break;
        case 4:
            realizarSaque()
            break;
        case 5:
            realizarEmprestimo()
            break;
        case 6:
            visualizarSaldo()
            break;
        case 7:
            visualizarExtrato()
            retornaExtrato()
            break;
        case 0:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção inválida")
            setTimeout(() => {
                menu()
            }, 500)
    }
}

        function atualizarSenha() {


            senhaRespondida = leitor.question("\n Informe a sua senha: ")
            if(senhaRespondida === senha)
            {
                console.log("Senha Correta! ")
            } else {
                console.log("Senha Incorreta: ",menu())
            }

            novasenha1 = leitor.question(" Digite a sua nova senha: ")
            novasenha2 = leitor.question(" Digite a sua nova senha novamente: ")

            if(novasenha1 === novasenha2)
            {
            console.log("Sua nova senha é:", novasenha1)
            senha = novasenha1
            } else {
                console.log("Incorreto",menu())
            }
            menu()

        }

        function atualizarDados() {

         nome = leitor.question("\n Informe o seu nome: ")
		 idade = leitor.questionInt(" Informe a sua idade: ")
		 genero = leitor.question(" Informe a sua identídade de gênero: ")
		 data = leitor.questionInt(" Informe a sua data de nascimento: ")
		 cpf = leitor.questionInt(" Informe o seu cpf: ")

         menu()

        }

        function realizarDeposito() {

            senhateste = leitor.question("Informe sua senha para proseguir: ")

            if(senhateste === senha)
            {
            deposito = leitor.questionInt("\n Insira o valor do depósito R$")
            saldo = deposito + saldo
            } else {
                console.log("Senha Incorreta: ",menu())
            }

                    retornaExtrato("Depósito de "+deposito+" Reais")
            menu()



        }

        function realizarSaque() {

            let saque

            senhateste = leitor.question("Informe sua senha para proseguir: ")

            if(senhateste === senha)
            {
              console.log("Senha correta, prossiga! ")
            
            } else {
                menu()
            }
                saque = leitor.questionInt(" Insira o valor do saque: ")
                
            if(saldo<saque)
            {
                console.log("Você não pode sacar algo que você não tem! ")
                menu()
            } else {
            saldo = saldo - saque
            retornaExtrato("Saque de "+saque+" Reais")
            menu()
            }

        }

        function realizarEmprestimo() {

            senhateste = leitor.question("Informe sua senha para proseguir: ")

            if(senhateste === senha)
            {
           
			let emprestimo = saldo / 2
			console.log(emprestimo)
           
            saldo = saldo + emprestimo
           retornaExtrato("Empréstimo de "+emprestimo+" Reais")
			console.log("Empréstimo concluído com sucesso:")
			menu()
        }
        }

        function visualizarSaldo() {

            console.log("\n O seu saldo atual é: ", saldo)

            menu()

        }

        function visualizarExtrato() {

            senhateste = leitor.question("Informe sua senha para proseguir: ")

            if(senhateste === senha)
            {
            
			    for( let i = 0; i < posicao ; i++) {
				console.log(extrato[i], "\n")
                    
                }
            }
        }
    function retornaExtrato(texto) {


        extrato[posicao] = texto
		if(posicao == 9) {
			posicao = 0
		} else {
			posicao++
                menu()
    }
}


        submenu()