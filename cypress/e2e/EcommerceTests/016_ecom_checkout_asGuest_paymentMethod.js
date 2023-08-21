///<reference types = 'Cypress'/>
import CartPage from "../../pageObjects/CartPage";
import Header from "../../pageObjects/Header";
import Categories from "../../pageObjects/Categories";
import ProductDetailPage from "../../pageObjects/ProductDetailPage";
import Checkout from "../../pageObjects/Checkout";

describe("Validate payment method feature", () => {
  const cartPage = new CartPage();
  const header = new Header();
  const categories = new Categories();
  const productDetail = new ProductDetailPage();
  const checkout = new Checkout();

  before(() => {
    cy.fixture("orderInfo.json").then((data) => {
      globalThis.order = data;
    });
    cy.fixture("creditcardInfo.json").then((data) => {
      globalThis.cardInfo = data;
    });
  });

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
    categories.navigateToDesiredSection(order.product_1.section);
    categories.navigateToSubList(order.product_1.subsection);
    productDetail.navigateToProductOverView(order.product_1.name);
    productDetail.changeProductQuality(order.product_1.quality);
    productDetail.addProductToCart();
    header.clickOnHeaderLinks("Shopping cart");
    cartPage.agreeOnTerms();
    cartPage.clickCheckoutBtn();
    cartPage.clickOnCheckoutAsGuestBtn();
    checkout.fillInString("First name:");
    checkout.fillInString("Last name:");
    checkout.fillInEmail();
    checkout.selectDropdown("Country:", "United States");
    checkout.selectDropdown("State / province:", "Arizona");
    checkout.fillInString("City:");
    checkout.fillInString("Address 1:");
    checkout.fillInNum("Zip / postal code:");
    checkout.fillInNum("Phone number:");
    checkout.clickOnBillBtnContinue();

    checkout.selectShippingAddressDropdown(0);
    checkout.clickOnShippingBtnContinue();
    checkout.selectShippingMethodRadioBtn("Next Day Air");
    checkout.clickOnShippingMethodBtnContinue();
  });

  it("validate payment feature with COD method", () => {
    const paymentMethod = "Cash On Delivery (COD)";
    checkout.selectPaymentMethod(paymentMethod);
    checkout.clickOnPaymentMethodBtnContinue();
    cy.get("#opc-payment_info").should("exist");
    cy.get("#checkout-payment-info-load td")
      .invoke("text")
      .should("include", "COD");

    checkout.clickOnPaymentInfoContinueBtn();
    checkout.getConfirmOrderSection().should("exist");
  });

  it.only("validate payment feature with credit card method", () => {
    const paymentMethod = "Credit Card";
    checkout.selectPaymentMethod(paymentMethod);
    checkout.clickOnPaymentMethodBtnContinue();
    cy.get("#opc-payment_info").should("exist");

    checkout.fillInPaymentInfoForCreditCard(
      cardInfo.cardType,
      cardInfo.cardHolder,
      cardInfo.cardNum,
      cardInfo.expireMonth,
      cardInfo.expireYear,
      cardInfo.cardCode
    );
    checkout.getConfirmOrderSection().should("exist");
  });
});
