import {
  CalculadoraSalario,
  Funcionario,
  Cargo,
} from "../src/SalaryCalculator";

describe("CalculadoraSalario", () => {
  let calculadoraSalario: CalculadoraSalario;

  beforeEach(() => {
    calculadoraSalario = new CalculadoraSalario();
  });

  it("deve calcular o salário líquido para DESENVOLVEDOR com salário >= 3000 (desconto de 20%)", () => {
    const funcionario: Funcionario = {
      nome: "John Doe",
      email: "john.doe@example.com",
      salarioBase: 3000,
      cargo: Cargo.DESENVOLVEDOR,
    };

    const salarioLiquido =
      calculadoraSalario.calcularSalarioLiquido(funcionario);
    expect(salarioLiquido).toBe(2400); // 3000 - 20%
  });

  it("deve calcular o salário líquido para DESENVOLVEDOR com salário < 3000 (desconto de 10%)", () => {
    const funcionario: Funcionario = {
      nome: "Jane Doe",
      email: "jane.doe@example.com",
      salarioBase: 2000,
      cargo: Cargo.DESENVOLVEDOR,
    };

    const salarioLiquido =
      calculadoraSalario.calcularSalarioLiquido(funcionario);
    expect(salarioLiquido).toBe(1800); // 2000 - 10%
  });

  it("deve calcular o salário líquido para DBA com salário >= 2000 (desconto de 25%)", () => {
    const funcionario: Funcionario = {
      nome: "Mark Smith",
      email: "mark.smith@example.com",
      salarioBase: 2500,
      cargo: Cargo.DBA,
    };

    const salarioLiquido =
      calculadoraSalario.calcularSalarioLiquido(funcionario);
    expect(salarioLiquido).toBe(1875); // 2500 - 25%
  });

  it("deve calcular o salário líquido para DBA com salário < 2000 (desconto de 15%)", () => {
    const funcionario: Funcionario = {
      nome: "Lucy Brown",
      email: "lucy.brown@example.com",
      salarioBase: 1800,
      cargo: Cargo.DBA,
    };

    const salarioLiquido =
      calculadoraSalario.calcularSalarioLiquido(funcionario);
    expect(salarioLiquido).toBe(1530); // 1800 - 15%
  });

  it("deve calcular o salário líquido para GERENTE com salário >= 5000 (desconto de 30%)", () => {
    const funcionario: Funcionario = {
      nome: "Alice White",
      email: "alice.white@example.com",
      salarioBase: 6000,
      cargo: Cargo.GERENTE,
    };

    const salarioLiquido =
      calculadoraSalario.calcularSalarioLiquido(funcionario);
    expect(salarioLiquido).toBe(4200); // 6000 - 30%
  });

  it("deve calcular o salário líquido para GERENTE com salário < 5000 (desconto de 20%)", () => {
    const funcionario: Funcionario = {
      nome: "Bob Black",
      email: "bob.black@example.com",
      salarioBase: 4000,
      cargo: Cargo.GERENTE,
    };

    const salarioLiquido =
      calculadoraSalario.calcularSalarioLiquido(funcionario);
    expect(salarioLiquido).toBe(3200); // 4000 - 20%
  });

  it("deve lançar um erro para cargo inválido", () => {
    const funcionario: Funcionario = {
      nome: "Usuário Inválido",
      email: "usuario.invalido@example.com",
      salarioBase: 3000,
      cargo: "CARGO_INVALIDO" as Cargo,
    };

    expect(() =>
      calculadoraSalario.calcularSalarioLiquido(funcionario)
    ).toThrow(Error);
  });
});
