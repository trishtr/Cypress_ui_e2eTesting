///<reference types = 'Cypress'/>
import CartPage from "../../pageObjects/CartPage";
import Header from "../../pageObjects/Header";
import Categories from "../../pageObjects/Categories";
import ProductDetailPage from "../../pageObjects/ProductDetailPage";
import Checkout from "../../pageObjects/Checkout";

describe("Validate shipping address feature", () => {
  const cartPage = new CartPage();
  const header = new Header();
  const categories = new Categories();
  const productDetail = new ProductDetailPage();
  const checkout = new Checkout();

  before(() => {
    cy.fixture("orderInfo.json").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
    categories.navigateToDesiredSection(data.product_1.section);
    categories.navigateToSubList(data.product_1.subsection);
    productDetail.navigateToProductOverView(data.product_1.name);
    productDetail.changeProductQuality(data.product_1.quality);
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
  });

  it.only("validate users can select current billing address as  shipping address", () => {
    checkout.selectShippingAddressDropdown(0);
    checkout.clickOnShippingBtnContinue();

    cy.get("#opc-shipping_method").should("exist");
  });
});
