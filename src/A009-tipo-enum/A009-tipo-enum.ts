// Poderia adicionar um valor de string ao enum, mas ai deveria adicionar valores a todos enums
//depois desse pois o typescript não saberia como continuar dali
enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(2);

console.log(Cores.VERMELHO);
console.log(Cores[0]);
