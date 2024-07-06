//import { lighthouse, prepareAudit } from 'cypress -lighthouse'
//import accessibility from 'cypress-axe';
describe('LambdaTest Certification 101- Test scenario1', () => {
    it('Slider tests using mouse event', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground')
        // wait for page to load & click “Drag & Drop Sliders” under “Progress Bars & Sliders”.
        cy.get(':nth-child(13) > .text-black').click();
        //cy.get('div#slider3').find('.sp__range-success > .sp__range').
        const valuesetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
        cy.get('#slider3 input[type="range"]')
            .should('have.value', '15')
            .then(($slider) => {
                valuesetter.call($slider[0], 95)
            })
            .trigger('change')
        //validate value to 95 after trigger.
        cy.get("output#rangeSuccess").should('have.value', '95');
    })

    it('Form submission , validation and light house audit', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground');
        //cy.injectAxe();

        //change the default port to "Samsung Note 9"
        cy.viewport(414, 864);
        //cy.configureViewports(viewports.viewports, viewport)
        cy.get(':nth-child(20) > .text-black').should('be.visible');
        //Click on Input form submit
        cy.get(':nth-child(20) > .text-black').click();
        //Verify the accessibility standard by cypress-axe or cypress-audit.
        //cy.checkA11y('.loginform', { runonly: { values: ['wcag2a', 'wcag2aa'] } });

        // Fill all the form mandatory fields
        cy.get("#name").type('shubham kumar');
        cy.get("#inputEmail4").type('testcertification@gmail.com');
        cy.get("#inputPassword4").type('Testing@123');
        cy.get("#company").type("https://cognizant.com");
        cy.get("#websitename").type("India");
        cy.get("select[name=country]").select('India');
        cy.get("#inputCity").type("hyderabad");
        cy.get("#inputAddress1").type("test text");
        cy.get("#inputAddress2").type('shubham test text');
        cy.get('#inputState').type('telangana');
        cy.get('#inputZip').type("2192913");
        cy.get('.bg-lambda-900').click();
        //assert the confirmation message.
        cy.get('.success-msg').should('contain', "Thanks for contacting us, we will get back to you shortly.");

        // lighthouse audit
        // prepareAudit()
        // lighthouse({
        //     performance: 90,
        //     'best-practices': 90,
        //     seo: 90,
        //     pwa: 50,
        // }).then(results => {
        //     console.log(results)
        // })
    });
    afterEach(() => {
    });
    after(() => {

    })
});