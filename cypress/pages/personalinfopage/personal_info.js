class PersonalInfo {




enterGender()
    {
    return cy.get('#gender')
    }

enterDateOfBirth(){ 
    return cy.get('#dob')
}
enterPhoneNumber(){
   return cy.get('#phoneNumber')

}

enterEmail(){
   return cy.get('#email')
    
}
enterUserName(){
  return  cy.get('#username')
}
enterlastName(){
   return cy.get('#lastName')

}
enterMiddleName(){
   return cy.get('#middleName')

}
enterFristName(){
   return cy.get('#firstName')   

}

enterConfrimPassword()
{
    
return cy.get("#confirmPassword")

}

enterPassword(){
return  cy.get("#password")
    
}

enterAddress(){
  return  cy.get("#address")
    
}
enterZipCode(){
   return cy.get("#zipCode")


}
enterCity(){
   return cy.get("#city")

}
enterCountry(){
    return  cy.get("#country")
}
enterSecurityQustion(){
   return cy.get("#securityQuestion")
    
    
}

acceptTermAndCondition(){
    return cy.get('input[type="checkbox"]')
}

enterSecurityAnswer(){
 return cy.get("#securityAnswer")
}

clickOnSubmitButton(){
  return cy.get("button[type='submit']")
}

verifyAlertAfterSubmission(){
    cy.get('.alert').should('have.text','Form submitted successfully!')
}


fillPersonalDetailForm(data){
    this.enterFristName().type(data.firstName)
    this.enterMiddleName().type(data.middleName)
    this.enterlastName().type(data.lastName)
    this.enterUserName().type(data.username)
    this.enterEmail().type(data.email)
    this.enterPhoneNumber().type(data.phoneNumber)
    this.enterDateOfBirth().type(data.dob)
    this.enterGender().select(data.gender);
    this.enterPassword().type(data.password)
    this.enterConfrimPassword().type(data.confirmPassword)
    this.enterAddress().type(data.address)
    this.enterCity().type(data.city)
    this.enterCountry().type(data.country)
    this.enterZipCode().type(data.zipCode)
    this.enterSecurityQustion().type(data.securityQuestion)
    this.enterSecurityAnswer().type(data.securityAnswer)
    this.acceptTermAndCondition().click()
    this.clickOnSubmitButton().click()
    this.verifyAlertAfterSubmission()
}

validateAllFormFields() {
  cy.fixture('personainfo/formValidation.json').then((validation) => {
    const formSections = validation.formValidation;

  
    Object.entries(formSections).forEach(([sectionName, fields]) => {
      cy.log(`Validating section: ${sectionName}`);

      fields.forEach((fieldData) => {
        const { selector, field, errorMessage } = fieldData;

        if (field !== '' && selector.startsWith('#')) {
          const fieldId = selector.replace('#', '');
          cy.get(`label[for="${fieldId}"]`).should('contain.text', field);
        }
      });
    });

    
    this.clickOnSubmitButton().click();

Object.values(formSections).flat().forEach(({ selector, errorMessage }) => {
  cy.get('body').then(($body) => {
    if ($body.find(selector).length > 0) {
      cy.get(selector).each(($el) => {
        cy.wrap($el)
          .parentsUntil('form') 
          .parent()
          .first()
          .within(() => {
            
            cy.get('small.text-danger')
              .contains(errorMessage)
              .scrollIntoView()
              .should('exist') 
              .and(($msg) => {
                const isVisible = Cypress.dom.isVisible($msg[0]);
                expect(isVisible, `Visibility of error message: "${errorMessage}"`).to.be.true;
              });
          });
      });
    }
  });
});


  });
}






}
export default PersonalInfo;