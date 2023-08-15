///<reference types = 'Cypress'/>
import CartPage from "../pageObjects/CartPage";
import Header from "../pageObjects/Header";
import Categories from "../pageObjects/Categories";
import ProductDetailPage from "../pageObjects/ProductDetailPage";

describe("Validate shopping cart page", () => {
  const cartPage = new CartPage();
  const header = new Header();
  const categories = new Categories();
  const productDetail = new ProductDetailPage();
  const productNameLst = new Array();

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
  });

  it("validate product name", () => {
    cartPage.getProductName().then(($ele) => {
      productNameLst.push($ele.text());
    });
    cy.wrap(productNameLst).should("contain", data.product_1.name);
  });

  it("validate total price", () => {
    const expectedTotalLst = [];

    cy.get(".product-unit-price").each((unitPriceTd, index) => {
      cy.get(".qty-input")
        .eq(index)
        .then(($qtyTd) => {
          const unitPrice = parseInt(unitPriceTd.text());
          cy.get($qtyTd)
            .invoke("val")
            .then(($qty) => {
              const total = unitPrice * $qty;
              cy.log(total);
              expectedTotalLst.push(total);
            });

          cy.log(unitPrice);
        });
    });

    cy.wrap(expectedTotalLst).should("deep.equal", cartPage.getSubTotalLst());
  });

  it("validate users can change product qty and update shopping cart ", () => {
    cartPage.getProductQty().clear().type("4");
    cartPage.getUpdateShoppingCartBtn().click();

    cartPage.getProductName().each(($text, index) => {
      if ($text.text() === data.product_1.name) {
        cartPage
          .getProductUnitPrice()
          .eq(index)
          .then(($price) => {
            cartPage
              .getProductQty()
              .eq(index)
              .invoke("val")
              .then(($qty) => {
                const pr = parseInt($price.text());
                cy.log(pr);

                const total = pr * $qty;
                cy.log(total);

                cartPage
                  .getSubTotal()
                  .eq(index)
                  .then(($actualtotal) => {
                    expect(total).to.be.eq(parseInt($actualtotal.text()));
                  });
              });
          });
      }
    });
  });

  it.only("validate users can click on continue shopping btn", () => {
    cartPage.getContinueShoppingCartBtn().click();
    cy.url().should("include", "desktops");
  });
});
