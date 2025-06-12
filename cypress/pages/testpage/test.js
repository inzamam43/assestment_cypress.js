class Form {
  enterFirstName() {
    return cy.get("input[placeholder='John']");
  }

  enterlastName() {
    return cy.get("input[placeholder='Doe']");
  }

  enterEmail() {
    return cy.get("input[placeholder='example@email.com']");
  }

  enterPasword() {
    return cy.get("input[name='password']");
  }

  enterConfrimPassword() {
    return cy.get("input[name='password']");
  }

  enterPhoneNumber() {
    return cy.get("input[name='phone']");
  }

  enterAddress() {
    return cy.get("textarea[name='address']");
  }

  getuploadFile() {
    return cy.get("input[type='file']");
  }

  getCaptacha() {
    cy.get("div:nth-child(9) label:nth-child(1)").then(($text) => {
      const value = $text.text();
      cy.log(value);
      cy.get("input[type='text']").type(value);
    });
  }

  resolveCaptacha() {
    cy.get("div:nth-child(9) label:nth-child(1)").then(($text) => {
      const captchaText = $text.text();
      cy.log(captchaText);
      // Extract integers using regex
      const numbers = captchaText.match(/\d+/g).map(Number); // [1, 5]

      // Calculate sum
      const sum = numbers.reduce((a, b) => a + b, 0); // 6

      // Type the answer into the CAPTCHA input field
      cy.get("input[type='text']").type(sum.toString());
    });
  }

  enterfakeSubmitButton() {
    return cy.get("button[type='button']");
  }

  enterRealSubmitButton() {
    return cy.get("button[type ='submit']")
  }

  verifyAlert() {
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Nice try, bot!");
    });
    this.enterfakeSubmitButton().click();
  }

  fillFormWithBot(data) {
    this.enterFirstName().type(data.firstName);
    this.enterlastName().type(data.lastName);
    this.enterEmail().type(data.email);
    this.enterPasword().type(data.password);
    this.enterConfrimPassword().type(data.confirmPassword);
    this.enterPhoneNumber().type(data.phoneNumber);
    this.enterAddress().click().type(data.address);
    this.getCaptacha();
    this.getuploadFile().selectFile("cypress/fixtures/form/Invoice-456833.pdf");
    this.enterRealSubmitButton().should("be.disabled");
    this.verifyAlert();

  }

  fillFormwithResolvedCaptcha(data) {
    cy.reload()
    this.enterFirstName().type(data.firstName);
    this.enterlastName().type(data.lastName);
    this.enterEmail().type(data.email);
    this.enterPasword().type(data.password);
    this.enterConfrimPassword().type(data.confirmPassword);
    this.enterPhoneNumber().type(data.phoneNumber);
    this.enterAddress().click().type(data.address);
    this.resolveCaptacha();
    this.getuploadFile().selectFile("cypress/fixtures/form/seagull_9510126.png");
    this.enterRealSubmitButton().should("be.enabled").click()
    
  }
}
export default Form;
