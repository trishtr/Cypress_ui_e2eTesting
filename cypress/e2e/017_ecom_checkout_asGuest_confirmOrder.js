///<reference types = 'Cypress'/>
import CartPage from "../pageObjects/CartPage";
import Header from "../pageObjects/Header";
import Categories from "../pageObjects/Categories";
import ProductDetailPage from "../pageObjects/ProductDetailPage";
import Checkout from "../pageObjects/Checkout";

describe("Validate confirm order feature", () => {
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

    const paymentMethod = "Cash On Delivery (COD)";
    checkout.selectPaymentMethod(paymentMethod);
    checkout.clickOnPaymentMethodBtnContinue();

    checkout.clickOnPaymentInfoContinueBtn();
  });

  it.only("validate confirm order feature", () => {
    checkout.getBillingInfoConfirm().should("exist");
    checkout.getShippingInfoConfirm().should("exist");
    checkout.getCartInfoConfirm().should("exist");
    checkout.getTotalInfoConfirm().should("exist");
    checkout.clickOnConfirmOrderBtn();
    checkout.getOrderCompletedSection().should("exist");
    checkout.getOrderNum().should("exist");
    checkout.getOrderTitle().should("exist");
  });
});
