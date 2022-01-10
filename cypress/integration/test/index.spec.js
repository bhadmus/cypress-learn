import PageObjects from '../../support/pageObjects/pageObjects'
const actions = new PageObjects()

describe('Test quidax login', ()=>{
    it('Launch the Site', ()=>{
        cy.visit('/');
    })

    it('Click the sign in icon', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            actions.clickAnElement(em.signInIcon);
        })
    })

    it('Insert Credentials', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            actions.typeAText(em.emailField, em.emailText);
            actions.typeAText(em.passwordField, em.passwordText);

        })
    })

    it('Click the sign in button', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            actions.clickAnElement(em.signInButton);

        })
    })
    
    it('Verify the presence of Verify Button', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            actions.pageLoader(em.verifyButton);

        })
    })
})