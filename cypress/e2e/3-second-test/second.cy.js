
/// <reference types="cypress" />

import SecondTest from "../../pages/secondtestpage/test2.js"
const secondTest = new SecondTest()
let formData = ''


describe('visit the baseUrl', () => {
  beforeEach(() => {
    cy.fixture('form/validForm.json').then((json)=>{
      formData =json

    })
    cy.visit(Cypress.env("baseUrl") + "/test2");
  })

  it("Fill the Second test Form for testing ",()=>{

    secondTest.fillSecondTestForm(formData)


  })

})