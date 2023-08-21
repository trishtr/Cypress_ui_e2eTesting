/// <reference types = 'Cypress'/>
import Categories from "../../pageObjects/Categories";
import ProductDetailPage from "../../pageObjects/ProductDetailPage";
import ComputersOverview from "../../pageObjects/ComputersOverview";

describe("Validate Buying flow", () => {
  const categories = new Categories();
  const productDetail = new ProductDetailPage();
  const computersOverview = new ComputersOverview();

  before(() => {
    cy.fixture("orderInfo.json").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(Cypress.env("ecommerce"));
    categories.navigateToDesiredSection("Computers");
  });
  it("Validate customer could add item to the shopping cart", () => {
    categories.navigateToSubList("Desktops");
    productDetail.navigateToProductOverView("Build your own cheap");
    productDetail.changeProductQuality("2");
    productDetail.addProductToCart();
    productDetail
      .getNotificationbar()
      .contains("The product has been added to your shopping cart");
  });

  it("Validate customer could not add item to the shopping cart with invalid quality", () => {
    categories.navigateToSubList("Desktops");
    productDetail.navigateToProductOverView("Build your own cheap");
    productDetail.changeProductQuality("0");
    productDetail.addProductToCart();
    productDetail.getNotificationbar().contains("Quantity should be positive");
  });

  it("Validate customer could not add item without selecting required options", () => {
    categories.navigateToSubList(data.product_2.subsection);
    productDetail.navigateToProductOverView(data.product_2.name);
    computersOverview.selectDropdown("RAM", "16");
    computersOverview.selectRadioBtn("OS", "44");
    productDetail.addProductToCart();
    productDetail.getNotificationbar().contains("Please select");
  });
  // it.only("testing unit price", () => {
  //   categories.navigateToSubList(data.product_2.subsection);
  //   productDetail.navigateToProductOverView(data.product_2.name);
  //   computersOverview.mappingLabelAndSubLabel();
  // });
});
