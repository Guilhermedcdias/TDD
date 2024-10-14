"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraSalario = exports.Cargo = void 0;
var Cargo;
(function (Cargo) {
    Cargo["DESENVOLVEDOR"] = "DESENVOLVEDOR";
    Cargo["DBA"] = "DBA";
    Cargo["TESTADOR"] = "TESTADOR";
    Cargo["GERENTE"] = "GERENTE";
})(Cargo || (exports.Cargo = Cargo = {}));
class CalculadoraSalario {
    calcularSalarioLiquido(funcionario) {
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
exports.CalculadoraSalario = CalculadoraSalario;
