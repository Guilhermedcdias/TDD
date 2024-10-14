export enum Cargo {
  DESENVOLVEDOR = "DESENVOLVEDOR",
  DBA = "DBA",
  TESTADOR = "TESTADOR",
  GERENTE = "GERENTE",
}

export interface Funcionario {
  nome: string;
  email: string;
  salarioBase: number;
  cargo: Cargo;
}

export class CalculadoraSalario {
  calcularSalarioLiquido(funcionario: Funcionario): number {
    const { salarioBase, cargo } = funcionario;

    switch (cargo) {
      case Cargo.DESENVOLVEDOR:
        return salarioBase >= 3000 ? salarioBase * 0.8 : salarioBase * 0.9;
      case Cargo.DBA: return salarioBase >= 2000 ? salarioBase * 0.75 : salarioBase * 0.85;
      case Cargo.TESTADOR:
        return salarioBase >= 2000 ? salarioBase * 0.75 : salarioBase * 0.85;
      case Cargo.GERENTE:
        return salarioBase >= 5000 ? salarioBase * 0.7 : salarioBase * 0.8;
      default:
        throw new Error("Cargo inválido");
    }
  }
}
