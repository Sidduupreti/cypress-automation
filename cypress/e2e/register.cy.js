import { selectors } from "../support/selectors";
describe('Validate registration functionality', () => {


    const username = "testuser" + Math.floor(Math.random() * 9000);
    const password = "User@123"+ `${Date.now().toString().slice(-4)}`;
    const email = 'johndoe' + Math.floor(Math.random() * 9000) + '@gmail.com';

    beforeEach(() => {
        cy.visit('/')
        cy.wait(500)
        cy.xpath(selectors.enter_store).click();
    });

    afterEach(function() {
        if(this.currentTest.state === 'failed') {
            cy.log('Test failed: ' + this.currentTest.title);
        } else {
            cy.log('Test passed: ' + this.currentTest.title);
        }
    });


    it('verify registration with valid credentials', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click()
        cy.xpath("/html/body/div[2]/div/a").click()
        cy.wait(500);
        cy.get(selectors.username_field).type("testuser");
        cy.get(selectors.password_field).type("User@123");
        cy.get(selectors.confirm_password_field).type("User@123");
        cy.get(selectors.first_name_field).type("John");
        cy.get(selectors.last_name_field).type("Doe");
        cy.get(selectors.email_field).type("johndoe@gmail.com");
        cy.get(selectors.phone_field).type("9843615276");
        cy.get(selectors.address1_field).type("123 Main St");
        cy.get(selectors.address2_field).type("Apt 4B");
        cy.get(selectors.city_field).type("New York");
        cy.get(selectors.state_field).type("NY");
        cy.get(selectors.zip_field).type("10001");
        cy.get(selectors.country_field).type("USA");
        cy.get('[name="newAccount"]').click();
        cy.log("Registration successful with valid credentials");
    });

    it('verify registration with empty fields', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click()
        cy.xpath("/html/body/div[2]/div/a").click()
        cy.wait(500);
        cy.get(selectors.username_field).clear();
        cy.get(selectors.password_field).clear();
        cy.get(selectors.confirm_password_field).clear();
        cy.get(selectors.first_name_field).clear();
        cy.get(selectors.last_name_field).clear();
        cy.get(selectors.email_field).clear();
        cy.get(selectors.phone_field).clear();
        cy.get(selectors.address1_field).clear();
        cy.get(selectors.address2_field).clear();
        cy.get(selectors.city_field).clear();
        cy.get(selectors.state_field).clear();
        cy.get(selectors.zip_field).clear();
        cy.get(selectors.country_field).clear();
        cy.get('[name="newAccount"]').click();
        cy.log("Registration failed with empty credentials");
    });

    it('verify password and confirm password mismatch', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click()
        cy.xpath("/html/body/div[2]/div/a").click()
        cy.wait(500);
        cy.get(selectors.username_field).type("testuser12345");
        cy.get(selectors.password_field).type("User@123");
        cy.get(selectors.confirm_password_field).type("User@12345");
        cy.get(selectors.first_name_field).type("John");
        cy.get(selectors.last_name_field).type("Doe");
        cy.get(selectors.email_field).type("johndoe@gmail.com");
        cy.get(selectors.phone_field).type("9843615276");
        cy.get(selectors.address1_field).type("123 Main St");
        cy.get(selectors.address2_field).type("Apt 4B");
        cy.get(selectors.city_field).type("New York");
        cy.get(selectors.state_field).type("NY");
        cy.get(selectors.zip_field).type("10001");
        cy.get(selectors.country_field).type("USA");
        cy.get('[name="newAccount"]').click();
        cy.log("Registration successful with valid credentials");
    });

    it('verify registration with invalid email format', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click()
        cy.xpath("/html/body/div[2]/div/a").click()
        cy.wait(500);
        cy.get(selectors.username_field).type("testuser12345");
        cy.get(selectors.password_field).type("User@123");
        cy.get(selectors.confirm_password_field).type("User@123");
        cy.get(selectors.first_name_field).type("John");
        cy.get(selectors.last_name_field).type("Doe");
        cy.get(selectors.email_field).type("johndoegmail.com");
        cy.get(selectors.phone_field).type("9843615276");
        cy.get(selectors.address1_field).type("123 Main St");
        cy.get(selectors.address2_field).type("Apt 4B");
        cy.get(selectors.city_field).type("New York");
        cy.get(selectors.state_field).type("NY");
        cy.get(selectors.zip_field).type("10001");
        cy.get(selectors.country_field).type("USA");
        cy.get('[name="newAccount"]').click();
        cy.log("Registration failed with invalid email format");
    });

    it('Verify registration with a weak password', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click()
        cy.xpath("/html/body/div[2]/div/a").click()
        cy.wait(500);
        cy.get(selectors.username_field).type("testuser12345");
        cy.get(selectors.password_field).type("12345");
        cy.get(selectors.confirm_password_field).type("12345");
        cy.get(selectors.first_name_field).type("John");
        cy.get(selectors.last_name_field).type("Doe");
        cy.get(selectors.email_field).type("johndoegmail.com");
        cy.get(selectors.phone_field).type("9843615276");
        cy.get(selectors.address1_field).type("123 Main St");
        cy.get(selectors.address2_field).type("Apt 4B");
        cy.get(selectors.city_field).type("New York");
        cy.get(selectors.state_field).type("NY");
        cy.get(selectors.zip_field).type("10001");
        cy.get(selectors.country_field).type("USA");
        cy.get('[name="newAccount"]').click();
        cy.log("Registration failed with a week password");
    });

    it('Verify registration after selecting user preferences', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click()
        cy.xpath("/html/body/div[2]/div/a").click()
        cy.wait(500);
        cy.get(selectors.username_field).type("testuser12345");
        cy.get(selectors.password_field).type("User@123");
        cy.get(selectors.confirm_password_field).type("User@123");
        cy.get(selectors.first_name_field).type("John");
        cy.get(selectors.last_name_field).type("Doe");
        cy.get(selectors.email_field).type("johndoegmail.com");
        cy.get(selectors.phone_field).type("9843615276");
        cy.get(selectors.address1_field).type("123 Main St");
        cy.get(selectors.address2_field).type("Apt 4B");
        cy.get(selectors.city_field).type("New York");
        cy.get(selectors.state_field).type("NY");
        cy.get(selectors.zip_field).type("10001");
        cy.get(selectors.country_field).type("USA");
        cy.get('[name="account.languagePreference"]').select("japanese");
        cy.get('[name="account.favouriteCategoryId"]').select("DOGS");
        cy.get('[name="account.listOption"]').check();
        cy.get('[name="account.bannerOption"]').check();
        cy.get('[name="newAccount"]').click();
    });

    it('Verify registration with existing username', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[2]").click()
        cy.xpath("/html/body/div[2]/div/a").click()
        cy.wait(500);
        cy.get(selectors.username_field).type("testuser12345");
        cy.get(selectors.password_field).type("User@123");
        cy.get(selectors.confirm_password_field).type("User@123");
        cy.get(selectors.first_name_field).type("John");
        cy.get(selectors.last_name_field).type("Doe");
        cy.get(selectors.email_field).type("johndoegmail.com");
        cy.get(selectors.phone_field).type("9843615276");
        cy.get(selectors.address1_field).type("123 Main St");
        cy.get(selectors.address2_field).type("Apt 4B");
        cy.get(selectors.city_field).type("New York");
        cy.get(selectors.state_field).type("NY");
        cy.get(selectors.zip_field).type("10001");
        cy.get(selectors.country_field).type("USA");
        cy.get('[name="newAccount"]').click();
    });
});