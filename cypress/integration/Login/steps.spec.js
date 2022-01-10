Given('I am on the quidax site', ()=>{
    cy.openSite();
})
When('I click the {string}', (button)=>{
    cy.fixture('elementMapper').then((em)=>{
        switch(button){
            case "sign in icon":
                cy.clickAnElement(em.signInIcon);
                break
            case "sign in button":
                cy.clickAnElement(em.signInButton);
        }
    })
})
And('I insert the {string}', (typeText)=>{
    cy.fixture('elementMapper').then((em)=>{
        switch(typeText){
            case "username":
                cy.typeSomeText(em.emailField, em.emailText);
                break
            case "password":
                cy.typeSomeText(em.passwordField, em.passwordText);

        }
    })
    
})
Then('I should see the authentication page', ()=>{
    cy.fixture('elementMapper').then((em)=>{
        cy.verifyPresence(em.verifyButton);
    })
    
})