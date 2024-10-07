const LoginPage = require('../pages/Login');  // Import pliku ze stroną logowania
const HomePage = require('../pages/HomePage');  // Import pliku ze stroną główną

describe('Login and Logout Tests using Page Object Pattern', () => {

    it('should login and logout user888', () => {
        // Test 1: Logowanie jako user888
        LoginPage.navigate();  // Przejście na stronę logowania
        LoginPage.login('user888@gmail.com', '1234567890');  // Logowanie

        // Otwieramy menu i klikamy Log out
        HomePage.logout();

        // Sprawdzenie, czy wróciliśmy do strony logowania
        cy.url().should('include', '/account/login');
    });

    it('should login and logout testowyqa', () => {
        // Test 2: Logowanie jako testowyqa
        LoginPage.navigate();  // Przejście na stronę logowania
        LoginPage.login('testowyqa@qa.team', 'QA!automation-1');  // Logowanie

        // Otwieramy menu i klikamy Log out
        HomePage.logout();

        // Sprawdzenie, czy wróciliśmy do strony logowania
        cy.url().should('include', '/account/login');
    });

});
