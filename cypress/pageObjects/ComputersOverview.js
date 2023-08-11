class ComputersOverview {
  getAttributesLabel() {
    return cy.get("dt");
  }

  selectDropdown(desiredLabel, desiredOption) {
    cy.get("dt label")
      .contains(desiredLabel)
      .then((ele) => {
        cy.get(ele).parent().next().find("select").select(desiredOption);
      });
  }

  selectRadioBtn(desiredLabel, desiredOption) {
    cy.get("dt label")
      .contains(desiredLabel)
      .then((ele) => {
        cy.get(ele).parent().next().find("input").check(desiredOption);
      });
  }

  getRadioBtn() {
    return cy.get("dd input");
  }

  getDropdown() {
    return cy.get("dd select");
  }
  getCheckedRadioBtn() {
    return cy.get("dd input[checked='checked']");
  }

  getSubLabel() {
    return cy.get("dd label");
  }

  getPrice() {
    return cy.get(".product-price");
  }

  mappingLabelAndSubLabel() {
    const mapping = {};

    cy.get("dt")
      .each((dtElement) => {
        const term = dtElement.text().trim();
        cy.log(term);
        cy.get(dtElement)
          .nextUntil("dt", "dd")
          .then((ddElements) => {
            const descriptions = [];
            ddElements.each((index, ddElement) => {
              descriptions.push(ddElement.innerText.trim());
            });
            mapping[term] = descriptions;
          });
      })
      .then(() => {
        cy.log(JSON.stringify(mapping));
      });
  }

  getExtraPrice() {
    let sum = 0;
    this.getCheckedRadioBtn()
      .siblings("label")
      .invoke("text")
      .then((text) => {
        if (text.includes("[")) {
          sum += parseInt(text.split("+")[1].replace("]", ""));
        }
        cy.log(sum);
      });

    return sum;
  }
}

export default ComputersOverview;
