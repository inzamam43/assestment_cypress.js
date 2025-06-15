/// <reference types="cypress" />
import PersonalInfo from "../../pages/personalinfopage/personal_info.js";

const personal = new PersonalInfo();

let psoitiveTestData = "";
let NegtiveTestData = "";

describe("vist the base url", () => {
  beforeEach(() => {
    cy.fixture("personainfo/validUser.json").then((json) => {
      psoitiveTestData = json;
    });

    cy.fixture("personainfo/invalidUsers.json").then((json) => {
      NegtiveTestData = json;
    });
    cy.login(Cypress.env("email"),Cypress.env("password"))
    cy.visit(Cypress.env("baseUrl") + "/personalinfo");
  });

  it("fills out all Personal Information Page Fields", () => {
   
    personal.fillPersonalDetailForm(psoitiveTestData)
    
  });
  it("validates all required fields before form submission",()=>{
    personal.validateAllFormFields()


  })



  });
