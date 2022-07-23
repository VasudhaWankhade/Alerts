describe("Selecting date from date picker", () => {

    it("Date picker webdriver university", () => {

        //create object of Date class

        let dateOne = new Date()
            // cy.log(date.getDate())
            // cy.log(date.getMonth())
            // cy.log(date.getFullYear())

        // to get month in long word
        // cy.log(date.toLocaleString("default", { 'month': 'long' }))
        // to get month in short
        // cy.log(date.toLocaleString("default", { 'month': 'short' }))
        // October 16, 2022


        dateOne.setDate(dateOne.getDate() + 99)
        let date = dateOne.getDate()
        cy.log(date)
        let month = dateOne.toLocaleString("default", { 'month': 'long' })
        cy.log(month)
        let year = dateOne.getFullYear()
        cy.log(year)


        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('span[class="input-group-addon"]').click()

        function selectYear() {
            cy.get('th[class="datepicker-switch"]').first().then(function(response) {
                if (!response.text().includes(year)) {
                    cy.get('th[class="next"]').first().click()
                    selectYear()
                }
            })
        }

        function selectMonth() {
            cy.get('th[class="datepicker-switch"]').first().then(function(response) {
                if (!response.text().includes(month)) {
                    cy.get('th[class="next"]').first().click()
                    selectMonth()
                }
            })
        }

        function selectDate() {
            cy.contains(date).click()
        }

        selectYear()
        selectMonth()
        selectDate()
    })



})