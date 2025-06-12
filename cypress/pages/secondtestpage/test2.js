class SecondTest {
  enterFristname() {
    return cy.get("input[placeholder='Enter first name']");
  }

  enterLastName() {
    return cy.get("input[placeholder='Enter last name']");
  }

  selectDateOfBirth() {
    // Set date (format: YYYY-MM-DD)
    cy.get(":nth-child(4) > .form-control")
      .type("2023-12-25") // December 25, 2023
      .trigger("change"); // Trigger change event

    // Verify the value
    cy.get('input[type="date"]').should("have.value", "2023-12-25");
  }

  selectRadio(value) {
    cy.get(`input[value='${value}']`).click();
  }

  checkbox() {
    return cy.get("#customCheck1");
  }

  enterPhoneNumber() {
    return cy.get("input[placeholder='Enter phone number']");
  }

  enterAddress() {
    return cy.get("textarea[placeholder='Enter address']");
  }

  enterTextArea() {
    return cy.get("textarea[placeholder='Enter text']");
  }

  uploadFile() {
    return cy.get("input[type='file']");
  }

  selectRange() {
    // Set value and trigger all necessary events
    cy.get('input[type="range"]')
      .invoke("val", 75)
      .trigger("input") // For React/Vue
      .trigger("change") // For jQuery
      .trigger("blur"); // Sometimes needed

    // Verify
    cy.get('input[type="range"]').should("have.value", "75");
  }

  selectColor() {
    // Set color directly (hex format)
    cy.get('input[type="color"]')
      .invoke("val", "#7f2f2f") // Red color
      .trigger("input") // Trigger React/Vue state update
      .trigger("change"); // Trigger jQuery/vanilla JS events

    // Verify the value was set
    cy.get('input[type="color"]').should("have.value", "#7f2f2f");
  }
  customCheckBox() {
    return cy.get("#customCheck2");
  }

  enterSearch() {
    return cy.get("input[placeholder='Search here']");
  }

  selectDate() {
    // Set date (format: YYYY-MM-DD)
    cy.get(":nth-child(22) > .form-control")
      .type("2023-12-25") // December 25, 2023
      .trigger("change"); // Trigger change event

    // Verify the value
    cy.get('input[type="date"]').should("have.value", "2023-12-25");
  }
  setTime() {
    // Set date (format: YYYY-MM-DD)
    cy.get(":nth-child(23) > .form-control")
      .invoke("val", "18:30") // Set value directly
      .trigger("input") // Trigger React/Vue updates
      .trigger("change"); // Trigger jQuery/vanilla JS eventst

    // Verify the value
    cy.get('input[type="time"]').should("have.value", "18:30");
  }

  clickOnSubmitButton() {
    return cy.get("button[type='submit']");
  }

  fillSecondTestForm(data) {
    this.enterFristname().type(data.firstName);
    this.enterLastName().type(data.lastName);
    this.selectDateOfBirth();
    this.selectRadio(data.gender);
    this.checkbox().check();
    this.enterPhoneNumber().type(data.phoneNumber);
    this.enterAddress().click().type(data.address);
    this.uploadFile().selectFile("cypress/fixtures/form/Invoice-456833.pdf");
    this.selectRange();
    this.selectColor();
    this.customCheckBox().check();
    this.enterTextArea().click().type(data.address);
    this.enterSearch().type(data.search);
    this.selectDate();
    this.setTime();
    this.clickOnSubmitButton().click();
  }
}
export default SecondTest;
