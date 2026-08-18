import { selectors } from "../support/selectors";
describe('Validate add to cart functionality', () => {

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

    it('verify by adding a product to cart', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[1]/img").click()

        cy.get("body").should("contain.text", "Shopping Cart");
        cy.get('[href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > :nth-child(5) > .Button').click();
        cy.get("body").should("contain.text", "Proceed to Checkout");
        cy.log("Product is added to cart successfully");
    });

    it("Verify by adding multiple quantities of the same product to the cart", () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[1]/img").click()
        cy.get("body").should("contain.text", "Shopping Cart");
        cy.get('[href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > :nth-child(5) > .Button').click();
        cy.get('[name="EST-14"]').clear().type("3");
        cy.get('[name="updateCartQuantities"]').click();
        cy.log("Multiple quantities of the same product added to cart successfully");
    }); 

    it('verify by adding different product to cart', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[1]/img").click()

        cy.get("body").should("contain.text", "Shopping Cart");
        cy.get('[href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > :nth-child(5) > .Button').click();
        cy.get('[href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img').click();
        cy.get(':nth-child(5) > :nth-child(1) > a').click();
        cy.get('.Button').click();
        cy.get("body").should("contain.text", "Proceed to Checkout");
        cy.log("Product is added to cart successfully");
    });

    it('Verify by adding updated product quantity to cart', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[1]/img").click()

        cy.get("body").should("contain.text", "Shopping Cart");
        cy.get('[href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > :nth-child(5) > .Button').click();
        cy.get('[name="EST-1"]').clear().type("5");
        cy.get('[name="updateCartQuantities"]').click();
        cy.log("Updated product quantity added to cart successfully");
    });

    it('Verify by removing product from cart', () => {
        cy.xpath("/html/body/div[1]/div[2]/div/a[1]/img").click()

        cy.get("body").should("contain.text", "Shopping Cart");
        cy.get('[href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click();
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
        cy.get(':nth-child(2) > :nth-child(5) > .Button').click();
        cy.get('[name="EST-1"]').clear().type("0");
        cy.get('[name="updateCartQuantities"]').click();
        cy.log("Product removed from cart successfully");
    });
});
