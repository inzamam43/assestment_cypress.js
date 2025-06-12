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

  it("i enter the all Personal information for Account", () => {
   
    personal.fillPersonalDetailForm(psoitiveTestData)
    
  });

  });
