"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalaryCalculator_1 = require("../src/SalaryCalculator");
describe("CalculadoraSalario", () => {
    let calculadoraSalario;
    beforeEach(() => {
        calculadoraSalario = new SalaryCalculator_1.CalculadoraSalario();
    });
    it("deve calcular o salário líquido para DESENVOLVEDOR com salário >= 3000 (desconto de 20%)", () => {
        const funcionario = {
            nome: "John Doe",
            email: "john.doe@example.com",
            salarioBase: 3000,
            cargo: SalaryCalculator_1.Cargo.DESENVOLVEDOR,
        };
        const salarioLiquido = calculadoraSalario.calcularSalarioLiquido(funcionario);
        expect(salarioLiquido).toBe(2400); // 3000 - 20%
    });
    it("deve calcular o salário líquido para DESENVOLVEDOR com salário < 3000 (desconto de 10%)", () => {
        const funcionario = {
            nome: "Jane Doe",
            email: "jane.doe@example.com",
            salarioBase: 2000,
            cargo: SalaryCalculator_1.Cargo.DESENVOLVEDOR,
        };
        const salarioLiquido = calculadoraSalario.calcularSalarioLiquido(funcionario);
        expect(salarioLiquido).toBe(1800); // 2000 - 10%
    });
    it("deve calcular o salário líquido para DBA com salário >= 2000 (desconto de 25%)", () => {
        const funcionario = {
            nome: "Mark Smith",
            email: "mark.smith@example.com",
            salarioBase: 2500,
            cargo: SalaryCalculator_1.Cargo.DBA,
        };
        const salarioLiquido = calculadoraSalario.calcularSalarioLiquido(funcionario);
        expect(salarioLiquido).toBe(1875); // 2500 - 25%
    });
    it("deve calcular o salário líquido para DBA com salário < 2000 (desconto de 15%)", () => {
        const funcionario = {
            nome: "Lucy Brown",
            email: "lucy.brown@example.com",
            salarioBase: 1800,
            cargo: SalaryCalculator_1.Cargo.DBA,
        };
        const salarioLiquido = calculadoraSalario.calcularSalarioLiquido(funcionario);
        expect(salarioLiquido).toBe(1530); // 1800 - 15%
    });
    it("deve calcular o salário líquido para GERENTE com salário >= 5000 (desconto de 30%)", () => {
        const funcionario = {
            nome: "Alice White",
            email: "alice.white@example.com",
            salarioBase: 6000,
            cargo: SalaryCalculator_1.Cargo.GERENTE,
        };
        const salarioLiquido = calculadoraSalario.calcularSalarioLiquido(funcionario);
        expect(salarioLiquido).toBe(4200); // 6000 - 30%
    });
    it("deve calcular o salário líquido para GERENTE com salário < 5000 (desconto de 20%)", () => {
        const funcionario = {
            nome: "Bob Black",
            email: "bob.black@example.com",
            salarioBase: 4000,
            cargo: SalaryCalculator_1.Cargo.GERENTE,
        };
        const salarioLiquido = calculadoraSalario.calcularSalarioLiquido(funcionario);
        expect(salarioLiquido).toBe(3200); // 4000 - 20%
    });
    it("deve lançar um erro para cargo inválido", () => {
        const funcionario = {
            nome: "Usuário Inválido",
            email: "usuario.invalido@example.com",
            salarioBase: 3000,
            cargo: "CARGO_INVALIDO",
        };
        expect(() => calculadoraSalario.calcularSalarioLiquido(funcionario)).toThrow(Error);
    });
});
