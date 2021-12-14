describe('Test quidax login', ()=>{
    it('Launch the Site', ()=>{
        cy.openSite();
    })
    it('Click the sign in icon', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.clickAnElement(em.signInIcon);
        })
    })
    it('Insert Credentials', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.typeSomeText(em.emailField, em.emailText);
            cy.typeSomeText(em.passwordField, em.passwordText);

        })
    })
    it('Click the sign in button', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.clickAnElement(em.signInButton);

        })
    })
    it('Verify the presence of Verify Button', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.verifyPresence(em.verifyButton);

        })
    })
})