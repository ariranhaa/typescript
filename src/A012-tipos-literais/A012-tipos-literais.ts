let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; //eslint-disable-line

const pessoa = {
  nome: 'Arthur' as const,
  sobrenome: 'Sottoriva',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Amarelo'));

//modeule mode
export default 1;
