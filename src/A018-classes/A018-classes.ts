export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cpnj: string) {
    this.nome = nome;
    this.cnpj = cpnj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Goldshi', '02.0323.554/0001-42');
const colaborador1 = new Colaborador('Gold', 'Ship');
const colaborador2 = new Colaborador('Agnes', 'Tachyon');
const colaborador3 = new Colaborador('Oguri', 'Cap');
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
