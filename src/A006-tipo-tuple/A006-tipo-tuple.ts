const dadosCliente1: [number, string] = [1, 'Arthur'];
const dadosCliente2: [number, string, string] = [1, 'Arthur', 'Sottoriva'];
const dadosCliente3: [number, string, string?] = [1, 'Arthur'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Arthur',
  'Costa',
  'Sottoriva',
];

dadosCliente1[0] = 25;
dadosCliente1[1] = 'Costa';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
