const jogada1 = "tesoura"
const jogada2 = "tesoura"

//seu código aqui

let pedra = "pedra";
let papel = "papel";
let tesoura = "tesoura";

if (jogada1 === jogada2) {
    console.log(`Empate!`)
}; 

if (jogada1 === pedra && jogada2 === tesoura) {
    console.log(`Jogador 1 venceu!`)
} else if (jogada1 === tesoura && jogada2 === pedra) {
    console.log(`Jogador 2 venceu!`)
};

if (jogada1 === papel && jogada2 === tesoura) {
    console.log(`Jogador 2 venceu!`)
} else if (jogada1 === tesoura && jogada2 === papel) {
    console.log(`Jogador 1 venceu!`)
};

if (jogada1 === pedra && jogada2 === papel) {
    console.log(`Jogador 2 venceu!`)
} else if (jogada1 === papel && jogada2 === pedra) {
    console.log(`Jogador 1 venceu`)
};