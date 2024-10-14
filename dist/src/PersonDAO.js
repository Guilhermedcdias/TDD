"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonDAO = void 0;
class PersonDAO {
    save(p) {
        // Lógica de salvar pessoa (não implementada)
    }
    isValidToInclude(p) {
        const errors = [];
        // Validação do nome
        const nameParts = p.name.trim().split(/\s+/); // Divide por qualquer quantidade de espaços
        if (nameParts.length < 2 || // Verifica se há pelo menos duas partes
            nameParts.some((part) => !/^[a-zA-ZÀ-ÿ]+$/.test(part)) // Verifica se cada parte contém apenas letras (inclui letras acentuadas)
        ) {
            errors.push("O nome deve ter pelo menos duas partes e conter apenas letras (sem números ou símbolos).");
        }
        // Validação da idade
        if (p.age < 1 || p.age > 200) {
            errors.push("A idade deve estar no intervalo de 1 a 200 anos.");
        }
        // Validação de pelo menos um email
        if (p.emails.length === 0) {
            errors.push("A pessoa deve ter pelo menos um e-mail.");
        }
        // Validação dos e-mails
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        p.emails.forEach((email) => {
            if (!emailRegex.test(email.name)) {
                errors.push(`O e-mail '${email.name}' não está no formato correto.`);
            }
        });
        return errors;
    }
}
exports.PersonDAO = PersonDAO;
