/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("---- Bem-vindo(a) ao jogo Black Jack ----");

    let iniciarRodada = confirm('Deseja iniciar uma nova rodada?')

    if (iniciarRodada){ 
      console.log('o Jogo começou');

        const carta = comprarCarta()
        //console.log(carta);



        let cartasJogador = []
        let cartasComputador = []

        let valorTotalJogador = 0
        let valorTotalComputador = 0

        while (cartasJogador.length < 2) {
          let cartaSorteada = comprarCarta()
          cartasJogador.push(cartaSorteada)
          valorTotalJogador += cartaSorteada.valor
        }

        while (cartasComputador.length < 2) {
          let cartaSorteada = comprarCarta()
          cartasComputador.push(cartaSorteada)
          valorTotalComputador += cartaSorteada.valor
        }
        console.log(`Jogador: ${cartasJogador[0].texto} e ${cartasJogador[1].texto}. Valor total: ${valorTotalJogador}`)

        console.log(`Computador: ${cartasComputador[0].texto} e ${cartasComputador[1].texto}. Valor total: ${valorTotalComputador}`)


        // condição caso passe de 21
        if (valorTotalJogador > 21) {
          console.log("Você ultrapassou 21 pontos. O computador venceu!")
        } else if (valorTotalComputador > 21) {
          console.log("O computador ultrapassou 21 pontos. Você venceu!")
        }


        // verificar vencedor
        if (valorTotalJogador <= 21 && (valorTotalJogador > valorTotalComputador || valorTotalComputador > 21)){
          console.log("Parabens vc VENCEU");
        } else if(valorTotalComputador <= 21 &&(valorTotalComputador > valorTotalJogador || valorTotalJogador > 21)){
          console.log('O Computador VENCEU'); 
        }
        




    } else{
      console.log('O jogo acabou');
    }

