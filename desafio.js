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
  console.log('O Jogo começou');

  
  let cartasJogador = []
  let cartasComputador = []

  let valorTotalJogador = 0
  let valorTotalComputador = 0

  while (cartasJogador.length < 2) {
    let cartaSorteada = comprarCarta()
    cartasJogador.push(cartaSorteada)
    valorTotalJogador += cartaSorteada.valor
  }

  console.log(`Jogador: ${cartasJogador[0].texto} e ${cartasJogador[1].texto}. Valor total: ${valorTotalJogador}`)

  // condição caso passe de 21
  if (valorTotalJogador > 21) {
    console.log("Você ultrapassou 21 pontos. O computador venceu!")
  } else {

    let comprarMaisCartas = true;
    let resultadoFinal = "";

    while (comprarMaisCartas && valorTotalJogador <= 21) {
      comprarMaisCartas = confirm('Deseja comprar mais uma carta?');

      if (comprarMaisCartas) {
        let cartaSorteada = comprarCarta();
        cartasJogador.push(cartaSorteada);
        valorTotalJogador += cartaSorteada.valor;

        console.log(`Sua nova carta é ${cartaSorteada.texto}. Seu novo valor total é ${valorTotalJogador}`);
      }
    }

    if (valorTotalJogador > 21) {
      resultadoFinal = "Você ultrapassou 21 pontos. O computador venceu!"
    } else {
      while (valorTotalComputador < valorTotalJogador) {
        let cartaSorteada = comprarCarta()
        cartasComputador.push(cartaSorteada)
        valorTotalComputador += cartaSorteada.valor
      }

      console.log(`Computador: ${cartasComputador[0].texto} e ${cartasComputador[1].texto}. Valor total: ${valorTotalComputador}`)

      if (valorTotalComputador > 21) {
        resultadoFinal = "O computador ultrapassou 21 pontos. Você venceu!"
      } else if (valorTotalJogador > valorTotalComputador) {
        resultadoFinal = "Parabéns, você venceu!"
      } else if (valorTotalJogador < valorTotalComputador) {
        resultadoFinal = "O computador venceu!"
      } else {
        resultadoFinal = "Empate!"
      }
    }
    console.log(resultadoFinal);
  }

} else {
  console.log('O jogo acabou');
}