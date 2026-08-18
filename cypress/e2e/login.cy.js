import { selectors } from "../support/selectors";
describe('Validate login functionality', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.wait(500)
        //cy.xpath(selectors.enter_store).click();
    
        cy.url().then((url) => {
            cy.log("Current URL: " + url);
        });
    
        cy.get('body').then(($body) => {
            cy.log($body.text());
        });
    });

    afterEach(function() {
        if(this.currentTest.state === 'failed') {
            cy.log('Test failed: ' + this.currentTest.title);
        } else {
            cy.log('Test passed: ' + this.currentTest.title);
        }
    });


    it('verify login with valid credentials', () => {
        cy.login("testuser01", "Test@123");

        cy.get("body").should("contain.text", "Welcome");
        cy.log("Login successful with valid credentials");
        //cy.get('[href="/actions/Account.action?signoff="]').click();   
        //cy.log("Logout successful");
    });
    it('verify login with invalid credentials', () => {
        
        cy.login("invaliduser", "invalidpassword");

        cy.get("body").should("contain.text", "Invalid username or password");
        cy.log("Login failed with invalid credentials");
    });
    it('verify login with empty credentials', () => {
        
        cy.login(" ", " ");

        cy.get("body").should("contain.text", "Please enter your username and password");
        cy.log("Login failed with empty credentials");
    });
})