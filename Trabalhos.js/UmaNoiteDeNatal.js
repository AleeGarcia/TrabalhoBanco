const leitor=require("readline-sync")

function gonesmenu() {

    console.log("\n")
    console.log("Bem vindo ao jogo GonesCombo - 'Uma noite de Natal'")
    console.log("E/Começar")
    console.log("Q/Créditos")
    console.log("R/Sair")

    let opcaoo = leitor.question("Digite a opção desejada: ")

    switch (opcaoo) {

        case "E":
            iniciogame()
            break;
        case "Q":
            creditos()
            break;
        case "R":
            console.log("Saindo...")
            break;
        default:
            console.log("Opção inválida")
            setTimeout(() => {
                gonesmenu()
            }, 1000)
    }
}

function iniciogame() {

    console.log("\n")
    console.log(" 1:00 AM. . .")
    console.log("\n")
    console.log(" Hmm.. Meu horário está tão confuso, acordei cedo outra vez")
    console.log("\n")
    console.log(" Meus pais foram viajar nesse final de semana, vou ver oque posso fazer tão cedo")
    console.log("\n")
    console.log(" Eu posso ver algo pelo Quarto!")
    console.log("\n")
    console.log(" Ou eu posso Dormir")
    console.log("\n")
    

    let opcao = leitor.question(" Bom, tenho algumas escolhas... ", "\n")

    switch (opcao) {

        case "Quarto":
            quarto()
            break;
        case "Dormir":
            dormir()
            break;
        case "Sair":
        console.log("O jogo foi interrompido!")
        break;
        default:
            console.log("Acho que não deveria fazer isso...")
            iniciogame()
            setTimeout(() => {
                gonesmenu()
            }, 500)
    }
}

function quarto() {
    console.log("\n")
    console.log(" Acho que devo ligar a Luz, está escuro aqui, e lá fora também...")
    console.log(" E por enquanto calmo, essa cidade me assusta, desde que meu pai")
    console.log(" Teve que se mudar pra cá")
    console.log("\n")

    let opcao = leitor.question("... ?")

    if(opcao === "Luz") {
        console.log("\n")
        console.log(" Você ligou a Luz")
    } else { if(opcao != "Luz") (quarto())
}

    fasequarto()

    
}

function dormir() {

    console.log("\n")
    console.log(" A noite foi calma, e você acordou para mais um dia, normal e tranquilo...")

}

function fasequarto() {

    console.log("\n")
    console.log(" A luz está ligada, parece estar tão frio esta noite.")
    console.log(" Bom, a previsão disse algo com começar a nevar esses dias, estamos perto do Natal!")
    console.log(" Algo pode acontecer hoje!")
    console.log("\n")
    console.log(" Eu posso Arrumar minha cama e depois desc#r, estou com sede")
    console.log("\n")

    let opcao = leitor.question("... ?")

    if(opcao === "Natal") {
        console.log("\n")
        console.log(" Nunca gostei do natal, me sinto vazio e com sentimentos ruins")
        console.log(" Acho que deve ser pelo motivo de sempre estar sozinho")
        console.log(" Pelo menos eu posso confiar em alguém...")

        (fasequarto())
       
     }

    if(opcao === "Arrumar") {
        console.log("\n")
        console.log(" A cama foi arrumada!")
        console.log("\n")
        console.log(" Sempre gostei de fitas VHS, por algum motivo tinha uma na minha cama?...")
        console.log(" Eu nunca deixo aqui, minha irmã deve ter deixado aqui antes de viajar com eles")

        (fasequarto())
    }

    if(opcao === "Descer") {
        console.log(" Estou descendo...")
        console.log(" Acho que não devo Sair, está Perigoso lá fora, as noites são perturbadas por aqui, meu pai disse...")
        console.log(" Talvez eu vá me divertir um pouco no meu Computador, pode ter alguém pra conversar!")
        console.log(" Vou beber Água pelo jeito")
    }
    fasedescer()


}

function fasedescer() {

    let opcao = leitor.question("...?")

    if(opcao === "Sair") {
        console.log("\n")
        console.log(" *Você saiu e viu algo*")
        console.log("\n")
        console.log(" **Barulhos estranhos vindo de perto**")
        console.log("\n")
        console.log(" O que foi aquilo? ")
        console.log("\n")
        console.log(" Papai disse que eu não deveria sair...")
        console.log(" Deve ter sido um animal")

        (fasedescer())
    }
    
    if(opcao === "Perigoso") {
        console.log("\n")
        console.log(" Papai disse que pela Cidade já aconteceu coisas estranhas")
        console.log(" E disse que seria uma Viajem a trabalho apenas")
        console.log(" Não achei um lugar ruim, daqui um mês já estaremos viajando novamente")
        (fasedescer())
    }
    if(opcao === "Água") {
        console.log("\n")
        console.log(" Estou sem sede! ")
        (faseconfusao())
    }

    if(opcao === "Cidade") {
        console.log("\n")
        console.log(" Há relatos, de que por aqui, acontece coisas estranhas perto do natal")
        console.log(" Nem a polícia consegue explicar, por isso papai disse para tomar cuidado")
        console.log(" Essa cidade parece confusa, dizem que nessa época acontece barulhos, batidas nas portas")
        console.log(" Não tenho certeza, só sinto um pequeno arrepio quando penso nisso")
        (fasedescer())
    }

    if(opcao === "Viajem") {
        console.log("\n")
        console.log(" Papai disse que essa viajem é algo importante, e que em 2 dias voltará, minha irmã quis ir junto")
        console.log(" Eu prefiro ficar, papai disse que não teria problema")
        console.log(" Apenas para eu não atender nenhum estranho nem nada do tipo!")
        (fasedescer())
    }
    if(opcao === "Computador")  {
        console.log("\n")
        console.log(" Bom, acho que vou me entreter um pouco no computador")
        console.log(" Pode ser bom ver algo por lá!")
        (fasedescer())
    }




}

function faseconfusao() {

    

    
    

}

function creditos() {

    console.log(" Jogo pensado em uma madrugada qualquer bem simples, feito por @imlilalee um programador em aprendizado!")
    (gonesmenu())


}





 gonesmenu()

