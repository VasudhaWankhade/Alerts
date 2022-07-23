// alerts ==> the elements which can not be inspected
//three types ==> normal alert==> returns nothing
// confirm alert ==> returns boolean value
// prompt alert ==> returns string entered in the input box

describe("Verify JavaScript alerts", () => {
    beforeEach(function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    // Normal alert by cy.on

    it('Verify normal alert', () => {
        cy.on('window:alert', (data) => {
            expect(data).to.eq('I am a JS Alert')
            return true
        })
        cy.get('button[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    // Normal alert by cy.window

    it("Verify normal alert by cy.window", () => {
        cy.window().then(function(data) {
            cy.stub(data, 'alert').returns(true)
        })
        cy.get('button[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })


    // Confirm alert for OK by cy.on

    it("Verify confirm alert for OK by cy.on", () => {
        cy.on('window:confirm', (data) => {
            expect(data).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    // Confirm alert for OK by cy.window

    it("Verify confirm alert for OK by cy.window", () => {
        cy.window().then(function(data) {
            cy.stub(data, 'confirm').returns(true)
        })
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    //Confirm alert for Cancel by cy.on

    it("Verify confirm alert for Cancel by cy.on", () => {
        cy.on('window:confirm', (data) => {
            expect(data).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    // Confirm alert for Cancel by cy.window

    it("Verify confirm alert for Cancel by cy.window", () => {
        cy.window().then(function(data) {
            cy.stub(data, 'confirm').returns(false)
        })
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    //Prompt alert for OK 

    it("Verify promt alert for OK", () => {
        cy.window().then(function(data) {
            cy.stub(data, 'prompt').returns('Vasudha')
            return true
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text', 'You entered: Vasudha')
    })

    // Prompt alert for Cancel

    it("Verify prompt alert for Cancel", () => {

        cy.window().then(function(data) {
            cy.stub(data, 'prompt').returns(null)
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text', 'You entered: null')
    })
})