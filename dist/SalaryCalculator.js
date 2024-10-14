"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryCalculator = exports.Role = void 0;
var Role;
(function (Role) {
    Role["DEVELOPER"] = "DEVELOPER";
    Role["DBA"] = "DBA";
    Role["TESTER"] = "TESTER";
    Role["MANAGER"] = "MANAGER";
})(Role || (exports.Role = Role = {}));
class SalaryCalculator {
    calculateNetSalary(employee) {
        const { baseSalary, role } = employee;
        switch (role) {
            case Role.DEVELOPER:
                return baseSalary >= 3000 ? baseSalary * 0.8 : baseSalary * 0.9;
            case Role.DBA:
            case Role.TESTER:
                return baseSalary >= 2000 ? baseSalary * 0.75 : baseSalary * 0.85;
            case Role.MANAGER:
                return baseSalary >= 5000 ? baseSalary * 0.7 : baseSalary * 0.8;
            default:
                throw new Error("Invalid role");
        }
    }
}
exports.SalaryCalculator = SalaryCalculator;
