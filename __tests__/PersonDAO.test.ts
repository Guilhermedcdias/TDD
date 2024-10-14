import { PersonDAO } from "../src/PersonDAO";
import { Person } from "../src/Person";
import { Email } from "../src/Email";

describe("PersonDAO", () => {
  let dao: PersonDAO;

  beforeEach(() => {
    dao = new PersonDAO();
  });

  // Teste para pessoa válida
  test("não deve retornar erros para uma pessoa válida", () => {
    const person = new Person(1, "João Silva", 30, [
      new Email(1, "joao@example.com"),
    ]);
    const errors = dao.isValidToInclude(person);
    console.log(errors);
    expect(errors.length).toBe(0);
  });

  // Teste para nome inválido
  test("deve retornar erro se o nome tiver menos de duas partes", () => {
    const person = new Person(1, "Joao", 30, [
      new Email(1, "joao@example.com"),
    ]);
    const errors = dao.isValidToInclude(person);
    expect(errors).toContain(
      "O nome deve ter pelo menos duas partes e conter apenas letras (sem números ou símbolos)."
    );
  });

  // Teste para nome com caracteres inválidos
  test("deve retornar erro se o nome contiver caracteres que não sejam letras", () => {
    const person = new Person(1, "João 123", 30, [
      new Email(1, "joao@example.com"),
    ]);
    const errors = dao.isValidToInclude(person);
    expect(errors).toContain(
      "O nome deve ter pelo menos duas partes e conter apenas letras (sem números ou símbolos)."
    );
  });

  // Teste para idade inválida (menor que 1)
  test("deve retornar erro se a idade for menor que 1", () => {
    const person = new Person(1, "João Silva", 0, [
      new Email(1, "joao@example.com"),
    ]);
    const errors = dao.isValidToInclude(person);
    expect(errors).toContain(
      "A idade deve estar no intervalo de 1 a 200 anos."
    );
  });

  // Teste para idade inválida (maior que 200)
  test("deve retornar erro se a idade for maior que 200", () => {
    const person = new Person(1, "João Silva", 201, [
      new Email(1, "joao@example.com"),
    ]);
    const errors = dao.isValidToInclude(person);
    expect(errors).toContain(
      "A idade deve estar no intervalo de 1 a 200 anos."
    );
  });

  // Teste para pessoa sem email
  test("deve retornar erro se não tiver e-mail associado", () => {
    const person = new Person(1, "João Silva", 30, []);
    const errors = dao.isValidToInclude(person);
    expect(errors).toContain("A pessoa deve ter pelo menos um e-mail.");
  });

  // Teste para formato de e-mail inválido
  test("deve retornar erro se o e-mail não estiver no formato correto", () => {
    const person = new Person(1, "João Silva", 30, [
      new Email(1, "joaoexample.com"),
    ]);
    const errors = dao.isValidToInclude(person);
    expect(errors).toContain(
      "O e-mail 'joaoexample.com' não está no formato correto."
    );
  });

  // Teste para e-mail com parte do nome faltando
  test("deve retornar erro se o e-mail não tiver parte antes ou depois do @ ou do domínio", () => {
    const personWithNoUsername = new Person(1, "João Silva", 30, [
      new Email(1, "@example.com"),
    ]);
    const errorsForNoUsername = dao.isValidToInclude(personWithNoUsername);
    expect(errorsForNoUsername).toContain(
      "O e-mail '@example.com' não está no formato correto."
    );

    const personWithNoDomain = new Person(1, "João Silva", 30, [
      new Email(1, "joao@.com"),
    ]);
    const errorsForNoDomain = dao.isValidToInclude(personWithNoDomain);
    expect(errorsForNoDomain).toContain(
      "O e-mail 'joao@.com' não está no formato correto."
    );

    const personWithNoTLD = new Person(1, "João Silva", 30, [
      new Email(1, "joao@example."),
    ]);
    const errorsForNoTLD = dao.isValidToInclude(personWithNoTLD);
    expect(errorsForNoTLD).toContain(
      "O e-mail 'joao@example.' não está no formato correto."
    );
  });
});
