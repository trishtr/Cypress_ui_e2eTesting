class Checkout {
  getBillingLabel() {
    return cy.get(".new-billing-address label");
  }
  getShippingLabel() {
    return cy.get(".new-shipping-address label");
  }
  fillInString(label) {
    cy.generateString().then((randomString) => {
      this.getBillingLabel().each(($label, index) => {
        if ($label.text() === label) {
          cy.get("label").eq(index).nextUntil("span").type(randomString);
        }
      });
    });
  }

  fillInNum(label) {
    cy.generateNum().then((randomNum) => {
      this.getBillingLabel().each(($label, index) => {
        if ($label.text() === label) {
          cy.get("label").eq(index).nextUntil("span").type(randomNum);
        }
      });
    });
  }

  fillInEmail() {
    cy.generateEmail().then((randomEmail) => {
      this.getBillingLabel().each(($label, index) => {
        if ($label.text() === "Email:") {
          cy.get("label").eq(index).nextUntil("span").type(randomEmail);
        }
      });
    });
  }

  selectDropdown(label, option) {
    this.getBillingLabel().each(($label, index) => {
      if ($label.text() === label) {
        cy.get("label").eq(index).nextUntil("span").select(option);
      }
    });
  }

  selectShippingAddressDropdown(option) {
    cy.get("#shipping-address-select").select(option);
  }

  clickOnBillBtnContinue() {
    cy.get("#billing-buttons-container input").click({ force: true });
  }
  clickOnShippingBtnContinue() {
    cy.get("#shipping-buttons-container input").click({ force: true });
  }

  selectShippingMethodRadioBtn(method) {
    cy.get(".method-name label").each(($method, index) => {
      if ($method.text().startsWith(method)) {
        cy.get(".method-name label").eq(index).prev("input").click();
      }
    });
  }
  clickOnShippingMethodBtnContinue() {
    cy.get(".shipping-method-next-step-button").click();
  }

  selectPaymentMethod(method) {
    cy.get(".payment-details label").each(($method, index) => {
      if ($method.text().startsWith(method)) {
        cy.get(".payment-details label").eq(index).prev("input").click();
      }
    });
  }

  clickOnPaymentMethodBtnContinue() {
    cy.get(".payment-method-next-step-button").click();
  }

  fillInPaymentInfoForCreditCard(
    cardType,
    cardHolder,
    cardNum,
    expireMonth,
    expireYear,
    cardCode
  ) {
    cy.get("#CreditCardType").select(cardType);
    cy.get("#CardholderName").type(cardHolder);
    cy.get("#CardNumber").type(cardNum);
    cy.get("#ExpireMonth").select(expireMonth);
    cy.get("#ExpireYear").select(expireYear);
    cy.get("#CardCode").type(cardCode);
    cy.get(".payment-info-next-step-button").click();
  }

  clickOnPaymentInfoContinueBtn() {
    cy.get(".payment-info-next-step-button").click();
  }

  getConfirmOrderSection() {
    return cy.get("#opc-confirm_order");
  }

  getBillingInfoConfirm() {
    return cy.get(".billing-info");
  }

  getShippingInfoConfirm() {
    return cy.get(".shipping-info");
  }
  getCartInfoConfirm() {
    return cy.get(".cart");
  }

  getTotalInfoConfirm() {
    return cy.get(".total-info");
  }

  clickOnConfirmOrderBtn() {
    cy.get(".confirm-order-next-step-button").click();
  }
  getOrderCompletedSection() {
    return cy.get(".order-completed");
  }
  getOrderTitle() {
    return cy.get(".title");
  }
  getOrderNum() {
    return cy.get(".details li");
  }
  clickOnOrderCompletedBtn() {
    cy.get(".order-completed-continue-button").click();
  }
}

export default Checkout;
