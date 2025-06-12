/// <reference types="cypress" />

import Form from "../../pages/testpage/test.js"
const form = new Form()
let formData = ''

describe('visit the baseUrl', () => {
  beforeEach(() => {
    cy.fixture('form/validForm.json').then((json)=>{
      formData =json

    })
    cy.visit(Cypress.env("baseUrl") + "/test");
  })

  it('I fill the form with fake submit as bot ', () => {
    form.fillFormWithBot(formData)

  
  })

  
  it('I fill the form with resolving the Captcha', () => {
    form.fillFormwithResolvedCaptcha(formData)

  
  })


})
