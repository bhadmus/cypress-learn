describe('Test quidax login', ()=>{
    it('Launch the Site', ()=>{
        cy.visit('/');
    })
    it('Click the sign in icon', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.get(em.signInIcon).should('be.visible').click();
        })
    })
    it('Insert Credentials', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.get(em.emailField).should('be.visible').type(em.emailText);
            cy.get(em.passwordField).should('be.visible').type(em.passwordText);

        })
    })
    it('Click the sign in button', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.get(em.signInButton).should('be.visible').click();

        })
    })
})