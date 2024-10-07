class LoginPage {
    navigate() {
        cy.visit('/account/login');  // Otwieranie strony logowania
    }

    enterEmail(email) {
        cy.get('#user_email').type(email);  // Wprowadzenie adresu email
    }

    enterPassword(password) {
        cy.get('#user_password').type(password);  // Wprowadzenie hasła
    }

    clickLoginButton() {
        cy.get('button[type="submit"]').click();  // Kliknięcie przycisku logowania
    }

    login(email, password) {
        this.enterEmail(email);  // Użycie metody wprowadzania emaila
        this.enterPassword(password);  // Użycie metody wprowadzania hasła
        this.clickLoginButton();  // Kliknięcie przycisku logowania
    }
}

module.exports = new LoginPage();  // Eksportowanie instancji klasy
