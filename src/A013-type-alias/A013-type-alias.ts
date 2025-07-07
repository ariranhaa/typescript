type Idade = number;
type Pessoa = {
  nome: string;
  sobrenome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorCMYK | CorRGB;

const pessoa: Pessoa = {
  idade: 20,
  nome: 'Arthur',
  salario: 0,
  sobrenome: 'Sottoriva',
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
console.log(setCorPreferida(pessoa, 'Vermelho'));
