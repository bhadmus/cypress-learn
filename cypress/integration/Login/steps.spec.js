Given('I am on the quidax site', ()=>{
    cy.openSite();
})
When('I click the sign in icon', ()=>{
    cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement();
    })
})
And('I insert the username', ()=>{
    
})
And('I insert the password', ()=>{
    
})
And('I click the sign in button', ()=>{
    
})
Then('I should see the authentication page', ()=>{
    
})