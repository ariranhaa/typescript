function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Arthur',
  sobrenome: 'Sottoriva',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Arthur', 'Sottoriva');
pessoa.exibirNome();

export { pessoa };
