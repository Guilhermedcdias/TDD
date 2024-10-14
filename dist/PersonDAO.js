"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonDAO = exports.Email = exports.Person = void 0;
class Person {
    constructor(id, name, age, emails) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.emails = emails;
    }
}
exports.Person = Person;
class Email {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.Email = Email;
class PersonDAO {
    isValidToInclude(person) {
        const errors = [];
        // Validate name
        const nameParts = person.name.trim().split(" ");
        if (nameParts.length < 2) {
            errors.push("Name must contain at least two parts.");
        }
        if (!/^[A-Za-z\s]+$/.test(person.name)) {
            errors.push("Name must only contain letters.");
        }
        // Validate age
        if (person.age < 1 || person.age > 200) {
            errors.push("Age must be between 1 and 200.");
        }
        // Validate emails
        if (person.emails.length === 0) {
            errors.push("Person must have at least one email.");
        }
        else {
            person.emails.forEach((email) => {
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.name)) {
                    errors.push("Email format is invalid.");
                }
            });
        }
        return errors;
    }
    save(person) {
        const errors = this.isValidToInclude(person);
        if (errors.length > 0) {
            throw new Error("Person cannot be saved due to validation errors.");
        }
        // Logic to save the person (e.g., database operation) would go here.
    }
}
exports.PersonDAO = PersonDAO;
